import { useRef, useState, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Aboutus from "../Aboutus"
import { useNavigate } from "react-router-dom";

export default function Terminal() {
  const navigate= useNavigate()
  const terminalRef = useRef(null);
  const scrollRef = useRef(null);
  const prompt = "[OpenMate@console ~]$ ";
  
  const [buffer, setBuffer] = useState("");
  const [caretIndex, setCaretIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(null);

  

  const commands = {
   
    clear: () => {
      setHistory([]);
      return null;
    },
    docs:()=>{
      navigate("/docs")
    },

    aboutUs:()=>{
    navigate("/about-us")
    },

    ls: () => `\n Available commands: 
 clear => clears the terminal 
 aboutUs => About Us
 docs=> Documentation

`,
  };

  

  // Handle cursor placement
  useEffect(() => {
    placeCaret();
  }, [buffer, caretIndex]);

  function placeCaret() {
    const el = terminalRef.current;
    if (!el) return;

    const selection = window.getSelection();
    const range = document.createRange();

      // Ensure the editable div contains a single text node (the buffer)
      if (!el.firstChild || el.firstChild.nodeType !== Node.TEXT_NODE) {
        // replace contents with the buffer text node so caret can be placed reliably
        el.textContent = buffer;
      }
      const textNode = el.firstChild;
      if (!textNode) return;

      // Safety: caret offset is relative to the editable buffer only
      const targetOffset = Math.min(caretIndex, textNode.length);

    try {
      range.setStart(textNode, targetOffset);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    } catch (error) {
      console.warn("Caret placement failed:", error);
    }
  }

  function handleKeyDown(e) {
    // We prevent default to handle all keystrokes manually through state
    e.preventDefault();

    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
      insertChar(e.key);
    } else if (e.key === "Backspace") {
      backspace();
    } else if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      navigateHistory(-1);
    } else if (e.key === "ArrowDown") {
      navigateHistory(1);
    } else if (e.key === "Enter" || e.keyCode === 13) {
      executeCommand();
    }
  }

  function insertChar(char) {
    const newBuffer = buffer.slice(0, caretIndex) + char + buffer.slice(caretIndex);
    setBuffer(newBuffer);
    setCaretIndex(caretIndex + 1);
  }

  function backspace() {
    if (caretIndex === 0) return;
    const newBuffer = buffer.slice(0, caretIndex - 1) + buffer.slice(caretIndex);
    setBuffer(newBuffer);
    setCaretIndex(caretIndex - 1);
  }

  function moveLeft() {
    if (caretIndex > 0) setCaretIndex(caretIndex - 1);
  }

  function moveRight() {
    if (caretIndex < buffer.length) setCaretIndex(caretIndex + 1);
  }

  function executeCommand() {
    const input = buffer.trim();
    const currentLine = prompt + buffer;
    // Ignore empty input (do nothing)
    if (!input) {
      setBuffer("");
      setCaretIndex(0);
      setHistoryIndex(null);
      return;
    }

    const [cmd, ...args] = input.split(" ");

    // Append current line, but avoid consecutive duplicates
    setHistory((prev) => {
      if (prev.length > 0 && prev[prev.length - 1] === currentLine) return prev;
      return [...prev, currentLine];
    });

    if (commands[cmd]) {
      const output = commands[cmd](args);
      if (output) {
        setHistory((prev) => {
          if (prev.length > 0 && prev[prev.length - 1] === output) return prev;
          return [...prev, output];
        });
      }
    } else {
      const notFound = `${cmd}: command not found`;
      setHistory((prev) => {
        if (prev.length > 0 && prev[prev.length - 1] === notFound) return prev;
        return [...prev, notFound];
      });
    }

    setBuffer("");
    setCaretIndex(0);
    setHistoryIndex(null);
  }

  function navigateHistory(direction) {
    if (history.length === 0) return;

    // Filter history to only include previous commands (lines starting with prompt)
    const commandHistory = history.filter(line => line.startsWith(prompt));
    if (commandHistory.length === 0) return;

    let newIndex = historyIndex === null ? commandHistory.length - 1 : historyIndex + direction;

    if (newIndex >= 0 && newIndex < commandHistory.length) {
      const selectedCommand = commandHistory[newIndex].replace(prompt, "");
      setHistoryIndex(newIndex);
      setBuffer(selectedCommand);
      setCaretIndex(selectedCommand.length);
    }
  }

  return (
    
    
    <div className="w-full h-screen bg-black flex flex-col p-6 overflow-hidden font-mono text-2xl term-style-">
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {/* Render History outside the editable div */}
        <div className="space-y-1">
          {Array.from(new Set(history)).map((line, i) => {
            const isPromptLine = line.startsWith(prompt);
            return (
              <div key={i} className="whitespace-pre-wrap break-all">
                {isPromptLine ? (
                  <>
                    <span className="term-style-yellow">{prompt}</span>
                    <span className="term-style-blue">{line.slice(prompt.length)}</span>
                  </>
                ) : (
                  <span className="term-style-blue">{line}</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Live Input Line */}
        <div className="flex mt-1 gap-x-4">
          <span className="term-style-yellow select-none">{prompt}</span>
          <div
            ref={terminalRef}
            contentEditable="plaintext-only"
            suppressContentEditableWarning
            spellCheck={false}
            onKeyDown={handleKeyDown}
            className="outline-none whitespace-pre-wrap break-all flex-1 term-style-blue"
          >
            {buffer}
          </div>
        </div>
        {/* Scroll Anchor */}
        <div ref={scrollRef} />
      </div>
    </div>
  );
}