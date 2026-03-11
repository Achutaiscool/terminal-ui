import React from "react";
import CopyBox from "../components/CopyBox.jsx"

function CLI()
{
    
    
    return(
        <>
        <div className="w-full flex flex-col mb-20">

        <div className=" font-inter text-6xl pl-8 pt-4 border-b-2 border-b-gray-900 w-full pb-4">
        <h1 className="term-style-red">Command Reference.</h1>
        </div>

        <div className=" text-5xl pl-[37px] pt-8">
            <h2 className="term-style-yellow" id="commands">CLI Commands.</h2>
        </div>

        <div className=" pl-[37px] pt-8 text-[22px] font-[300] tracking-wide leading-10.5 pr-[37px]">
            <p className="pb-8 term-style-blue">
                This section provides a detailed reference for all available om commands.
            </p>
<div className="space-y-18">

            <p className="term-style-blue">
                <h2 id="init-cli"><span className="font-[500] term-style-yellow text-3xl ">{`1)`} Initialization.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    Initializes the current directory as a repository.
                    <CopyBox language={`Terminal`} code={`om init <name>`} />
                </p>
                </div>
            </p>
            <p className="term-style-blue">
                <h2 id="add-cli"><span className="font-[500] term-style-yellow text-3xl ">{`2)`} Add.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    Adds a new repository or a new collection.
                </p>
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Repo Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om add <name> "<path/to/repo>"`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Collection Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om add -c <name> <repo1,repo2,...>`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Flags:</span> -c to specify that you are updating a collection.
                </p>
                </div>
            </p>
            <p className="term-style-blue">
                <h2 id="update-cli"><span className="font-[500] term-style-yellow text-3xl ">{`3)`} Update.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    Updates the path of an existing repository or the contents of a collection.
                </p>
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Repo Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om update <name> "<new/path>"`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Collection Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om update -c <name> <repo1,repo2,...>`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Flags:</span> -c to specify that you are updating a collection.
                </p>
                </div>
            </p>
            <p className="term-style-blue">
                <h2 id="remove-cli"><span className="font-[500] term-style-yellow text-3xl ">{`4)`} Remove.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    Removes a stored repository or collection.
                </p>
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Repo Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om remove <name>`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Collection Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om remove -c <name>`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Flags:</span> -c to specify that you are updating a collection.
                </p>
                </div>
            </p>
            <p className="term-style-blue">
                <h2 id="list-cli"><span className="font-[500] term-style-yellow text-3xl ">{`5)`} List.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    Lists all stored repositories and collections, or filters the list.
                </p>
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Syntax</span>
                </p>
                <CopyBox language={`Terminal`} code={`om list`} />
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">OR</span>
                </p>
                <CopyBox language={`Terminal`} code={`om list <collection-name>`} />
                
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Flags:</span> 
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-3">
                    <li>
                        <span className="term-style-blue">-r: List only repositories.</span>
                    </li>
                    <li>
                        <span className="term-style-blue">-c: List only collections.</span>
                    </li>
                </ul>
                </div>
            </p>
                <p className="term-style-blue">
                <h2 id="path-cli"><span className="font-[500] term-style-yellow text-3xl ">{`6)`} Path.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    Prints the stored path of a repository.
                    <CopyBox language={`Terminal`} code={`om path <name>`} />
                </p>
                </div>
                </p>
                
                <p className="term-style-blue">
                <h2 id="repos-cli"><span className="font-[500] term-style-yellow text-3xl ">{`7)`} Opening repos on editors.</span></h2>
                <div className="pt-6">
                <p className="term-style-blue">
                    <span className="font-[500] term-style-blue">Editors:</span>
                    <ul className="list-disc pl-8 mt-4 space-y-3 term-style-blue">
                        <li className="term-style-blue">
                            <span className="font-[375] term-style-blue">VScode.</span>
                            <CopyBox language={`Terminal`} code={`om vs <name>`} />
                        </li>
                        <li className="term-style-blue">
                            <span className="font-[375] term-style-blue">WindSurf.</span>
                            <CopyBox language={`Terminal`} code={`om ws <name>`} />
                        </li>
                        <li className="term-style-blue">
                            <span className="font-[375] term-style-blue">Cursor.</span>
                            <CopyBox language={`Terminal`} code={`om cs <name>`} />
                        </li>
                        <li className="term-style-blue">
                            <span className="font-[375] term-style-blue">IntelliJ IDEA.</span>
                            <CopyBox language={`Terminal`} code={`om ij <name>`} />
                        </li>
                        <li className="term-style-blue">
                            <span className="font-[375] term-style-blue">PyCharm.</span>
                            <CopyBox language={`Terminal`} code={`om pc <name>`} />
                        </li>
                    
                    </ul>
                </p>
                </div>

                </p>
            
</div>
        </div>
        </div>
        
        
        </>
    )
}
export default CLI