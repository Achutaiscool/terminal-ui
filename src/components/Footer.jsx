import React from "react";

function Footer() {
  return (
    
    <footer className="term-divider term-divider-t [--g:1]">
      <div className="max-w-7xl px-8  py-12 grid grid-cols-1 md:grid-cols-3 ">
        
        {/* Column 1: Logo & Description */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl  term-style-red">OpenMate</h1>
          <p className="r text-sm term-style-blue">
            One-key access to all your local projects. Open, manage, and navigate your code faster than ever.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-2 px-30">
          <h2 className="text-lg  term-style-red">Quick Links</h2>
          <a href="/docs" className="term-style-blue">Docs</a>
          <a href="/#part-2" className="term-style-blue">Features</a>
          <a href="/#part-3" className="term-style-blue">Supported Editors</a>
        </div>

        {/* Column 3: Social / Contact */}
        <div className="flex flex-col space-y-2 px-30">
          <h2 className="text-lg  term-style-red">Connect</h2>
          <div className="flex space-x-4 mt-2 ">
            <a href="https://x.com/Achuta_Rao_" target="blank" className="term-style-blue">Twitter</a>
            <a href="https://github.com/vivekvpai" target="blank" className="term-style-blue">GitHub</a>
            <a href="https://www.linkedin.com/in/vivek-v-pai/" target="blank" className="term-style-blue">LinkedIn</a>
          </div>
        </div>
      </div>
      

      {/* Bottom copyright */}
      <div className=" mt-1 pb-6 text-center text-gray-500 text-sm font-inter">
        © {new Date().getFullYear()} OpenMate. All rights reserved.
      </div>
    </footer>
    
  );
}

export default Footer;
