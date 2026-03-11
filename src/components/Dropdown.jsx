import React, { useState, useRef, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ChevronRight } from "lucide-react"

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const [maxHeight, setMaxHeight] = useState(0)
  const ulRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (ulRef.current) {
      setMaxHeight(ulRef.current.scrollHeight)
    }
  }, [items])

  // auto-open dropdown when current route matches any child item
  useEffect(() => {
    const match = items && items.some(item => item.path && location.pathname === item.path)
    setOpen(match)
  }, [location.pathname, items])

  return (
    <div className="w-full font-inter border-b-2 border-gray-900 pb-2">
      
      <button
        onClick={() => setOpen(!open)}
        className={`w-full text-2xl pt-2 pl-6 cursor-pointer transition-colors duration-300 flex justify-between items-center ${open ? "term-style-red" : "term-style-blue"}`}
      >
        {label}
        <ChevronRight
          className={`transition-transform duration-500 ease-in-out ${open ? "rotate-90 term-style-red" : "rotate-0 term-style-blue"}`}
          size={22}
        />
      </button>

      
      <ul
        ref={ulRef}
        className={`text-left overflow-hidden transition-all duration-500 ease-in-out pl-10 term-style-blue`}
        style={{
          maxHeight: open ? `${maxHeight}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        {items.map((item, i) => {
          const isActive = item.path && location.pathname === item.path
          return (
          <li
            key={i}
            onClick={() => {
              if (item.onClick) item.onClick()
              if (item.path) navigate(item.path)
              setOpen(false)
            }}
            className={`cursor-pointer py-2 text-lg transition-colors duration-300 ${isActive ? "term-style-red" : "term-style-blue"}`}
          >
            {item.label}
          </li>
        )})}
      </ul>
    </div>
  )
}

export default Dropdown
