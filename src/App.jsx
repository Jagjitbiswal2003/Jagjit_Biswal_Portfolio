import React, { Suspense } from "react";
import Sidebar from "./components/Sidebar";
import { Element } from "react-scroll";
import Home from "./components/Home.jsx"; // ✅ Home loaded normally (not lazy)

const About = React.lazy(() => import("./components/About.jsx"));
const Projects = React.lazy(() => import("./components/Projects.jsx"));
const Internship = React.lazy(() => import("./components/Internship.jsx"));
const Certificates = React.lazy(() => import("./components/Certificates.jsx"));
const Skill = React.lazy(() => import("./components/Skill.jsx"));
const Contact = React.lazy(() => import("./components/Contact.jsx"));


export default function App() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 md:ml-64 transition-all duration-300">
        {/* Home Page loads immediately */}
        <Element name="home">
          <Home />
        </Element>

        {/* Other sections lazy-loaded */}
        <Suspense fallback={<div className="p-8">Loading...</div>}>
          <Element name="about">
            <About />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="internship">
            <Internship />
          </Element>
            <Element name="skill">
            <Skill />
          </Element>
          <Element name="certificates">
            <Certificates />
          </Element>
           <Element name="contact">
            <Contact />
          </Element>
        </Suspense>
      </div>
    </div>
  );
}
