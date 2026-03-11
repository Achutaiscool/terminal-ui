import React from "react";
import CopyBox from "../components/CopyBox.jsx"

function Installation() {
  return (
    <>
    <div className="w-full flex flex-col mb-20">

        <div className=" font-inter text-6xl pl-8 pt-4 border-b-2 border-b-gray-900 w-full pb-4">
        <h1 className="term-style-red">Getting Started.</h1>
        </div>

        <div className="font-inter text-4xl pl-[37px] pt-8">
            <h2 className="term-style-yellow">Installation.</h2>
        </div>

        <div className="font-inter pl-[37px] pt-8 text-[22px] font-[350] tracking-wide leading-10.5 pr-[37px]">
            <p className="term-style-blue">
                You can install OpenMate globally using npm, which makes the om command available in your terminal.
            </p>

            <h2 className="pt-8 font-[600] term-style-blue text-2xl" id="install-via-npm">{`1)`} Install via npm:</h2>
            <CopyBox language={`Terminal`} code={`npm install -g openmate`} />

            <h2 className="pt-8 font-[600] term-style-blue text-2xl" id="verify">{`2)`} Verify installation:</h2>
            <p className="pl-1 term-style-blue">Check that the installation was successful by running the version command.</p>
            <CopyBox language={`Terminal`} code={`om --version`} />
        </div>
    
    </div>
    </>
    )
}

export default Installation;
