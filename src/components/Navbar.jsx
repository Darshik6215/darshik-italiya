import React from "react";
import logo from "../assets/images/raviKumarLogo.webp";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          {/* <img
            src={logo}
            alt="Darshik-Italiya-Logo"
            className="mx-2"
            width={50}
            height={33} 
          /> */}
          <h1 className="text-4xl italic"> &lt;Darshik&gt; </h1>
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/darshikitaliya/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Darshik6215"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
