import React from "react";

import backgroundImage from '../assets/background.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <section
      className="h-screen flex items-center px-12 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-xl text-white">
        <h1 className="text-4xl font-bold mb-4 mr-3">
          Hi, this is <span className="text-teal-400">Jagjit Biswal</span>
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg md:text-lg mb-6 text-justify -ml-2 sm:-ml-0">
          Hi, I am Jagjit Biswal, a MERN Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy learning new tools and building projects that solve real-world problems.
        </p>

        {/* Social + CV */}
        <div className="flex items-center gap-6 mt-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jagjitbiswal/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-400 hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Jagjitbiswal2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>

          {/* Download CV */}
          <a
            href="https://drive.google.com/file/d/19IEv-yTChjWKwAcKc1IsmkFswPLjEFj3/view?usp=sharing" 
            download
            className="bg-teal-500 text-white px-5 py-2 rounded-lg shadow hover:bg-teal-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
