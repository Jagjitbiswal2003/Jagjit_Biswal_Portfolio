import React, { useState } from "react";
import { Link } from "react-scroll";

import profilePic from '../assets/Profilepic.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faBook,
  faUserGear,
  faDesktop,
  faCertificate,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger icon for mobile/tablet */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-white bg-gray-900 p-2 rounded-md focus:outline-none"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center py-6 shadow-lg transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Profile Section */}
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-37 h-37 rounded-full border-4 border-teal-400 mb-4"
        />
        <h2 className="text-xl font-bold mb-10">Jagjit Biswal</h2>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-6 text-lg font-medium">
          <Link
            to="home"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
          <Link
            to="about"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faUser} /> <span>About</span>
          </Link>

          <Link
            to="projects"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faDesktop} /> <span>Projects</span>
          </Link>
           
           <Link
            to="internship"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faUserGear} /> <span>Internship</span>
          </Link>

           <Link
            to="skill"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faBook} /> <span>Skills</span>
          </Link>

           <Link
            to="certificates"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faCertificate} /> <span>Certificates</span>
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            className="flex items-center space-x-2 cursor-pointer hover:text-teal-400"
            onClick={closeSidebar}
          >
            <FontAwesomeIcon icon={faEnvelope} /> <span>Contact</span>
          </Link>
        </nav>
      </div>

      {/* Dark background overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={closeSidebar}
        ></div>
      )}
    </>
  );
}
