import { Terminal } from "lucide-react"
import CopyBox from "../components/CopyBox"

function Mcp(){
return(
     <>
        <div className="w-full flex flex-col mb-20">

        <div className=" text-6xl pl-8 pt-4 border-b-2 border-b-gray-900 w-full pb-4">
        <h1 className="term-style-red">OpenMate MCP Server.</h1>
        </div>

        <div className=" pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px]">
            <p className="term-style-blue">
                An MCP (Model Context Protocol) server for managing repositories and collections with OpenMate.
            </p>
            <p>
            <span className="term-style-red font-bold">Note:</span> <span className="term-style-blue">This MCP server works only when OpenMate CLI is installed.</span>
            </p>
        </div>

        <div className=" text-5xl pl-[37px] pt-10 pb-8">
         <h2 id="features" className="term-style-yellow">Features.</h2>
        </div>
        <div className=" pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px] ">
            <p className="font-[500] term-style-yellow text-3xl">Open repositories in your favorite editor:</p>
            <ul className="list-disc list-inside pl-10 term-style-blue">
                <li className="term-style-blue">VS Code</li>
                <li className="term-style-blue">WindSurf</li>
                <li className="term-style-blue">Cursor</li>
                <li className="term-style-blue">Intellij IDEA</li>
                <li className="term-style-blue">PyCharm</li>
                <li className="term-style-blue">Antigravity</li>
            </ul>
        </div>
        <div className=" pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px] ">
            <p className="font-[500] term-style-yellow text-3xl">Preferred editor support:</p>
            <ul className="list-disc list-inside pl-10 term-style-blue">
                <li className="term-style-blue">Set a default IDE per repo or collection{`(om ide <name> <ide>)`}</li>
                <li className="term-style-blue">Open without specifying IDE → uses default {`(om d <name>)`}</li>
            </ul>
        </div>
        <div className=" pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px] ">
            <p className="font-[500] term-style-yellow text-3xl">Repository management:</p>
            <ul className="list-disc list-inside pl-10 term-style-blue">
                <li className="term-style-blue">Add a new repository</li>
                <li className="term-style-blue">List repositories</li>
                <li className="term-style-blue">Show repository path</li>
                <li className="term-style-blue">Remove repository</li>
            </ul>
        </div>
        <div className=" pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px] ">
            <p className="font-[500] term-style-yellow text-3xl">Collection management:</p>
            <ul className="list-disc list-inside pl-10 term-style-blue">
                <li className="term-style-blue">Add a collection</li>
                <li className="term-style-blue">Delete a collection</li>
                <li className="term-style-blue">List collection contents</li>
                <li className="term-style-blue">Add repo to collection</li>
                <li className="term-style-blue">Remove repo from collection</li>
                <li className="term-style-blue">Add common directory</li>
            </ul>
        </div>

         <div className=" text-3xl pl-[37px] pt-8 pr-[37px]">
            <h2 className="term-style-yellow" id="installation">Installation.</h2>
            <CopyBox language={`Terminal`} code={`npm install -g openmate-mcp`} />
        </div>
                 <div className=" text-3xl pl-[37px] pt-8 pr-[37px]">
                        <h2 className="term-style-yellow" id="use-with">Use with Claude Desktop / Windsurf / Cursor / Antigravity.</h2>
                        <CopyBox language={`JSON`} code={`{
  "mcpServers": {
    "openmate": {
      "command": "openmate-mcp"
    }
  }
}
`} />
                </div>
        <div className=" pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px] ">
            <p className="font-[500] term-style-yellow text-3xl" id="Available Tools">Available Tools:</p>
            <ul className="list-disc list-inside pl-10 term-style-blue">
                <li className="term-style-blue">list-repos: List all repositories and collections</li>
                <li className="term-style-blue">add-repo: Add a new repository</li>
                <li className="term-style-blue">get-repo: Get path of a repository</li>
                <li className="term-style-blue">remove-repo: Remove a repository</li>
                <li className="term-style-blue">add-collection: Add a collection</li>
                <li className="term-style-blue">delete-collection: Delete a collection</li>
                <li className="term-style-blue">list-collection: List collections</li>
                <li className="term-style-blue">set-ide: Set preferred IDE per repo or collection</li>
                <li className="term-style-blue">open-repo: Open a repository (IDE optional: default IDE if omitted)</li>
                <li className="term-style-blue">open-collection: Open all repos in a collection (IDE optional: default IDE if omitted)</li>
            </ul>
        </div>


        </div>
        </>
)
}
export default Mcp