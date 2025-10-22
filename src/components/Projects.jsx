import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Doctor Appointment Management System",
      description: "A comprehensive healthcare platform for scheduling, managing, and tracking medical appointments.",
      image:  "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      skills: ["React", "Node.js", "MongoDB", "Express", "JWT","Nodemailer"],
      githubLink: "https://github.com/Jagjitbiswal2003/DAMS"
    },
    {
      id: 2,
      name: "ShopNow E-commerce Website",
      description: "A full-featured online shopping platform with product catalog, cart, checkout, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      skills: ["React", "Redux", "Tailwind CSS","React Router","Axios Library"],
      githubLink: "https://github.com/Jagjitbiswal2003/My-Ecommerce-website"
    },
    {
      id: 3,
      name: "Multi-City Weather Tracker",
      description: "Real-time weather monitoring application that displays forecasts for multiple cities with interactive maps and charts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
      skills: ["HTML5","CSS3","JavaScript", "API Integration","Responsive"],
      githubLink: "https://github.com/Jagjitbiswal2003/Multicity-Weather-Tracker"
    },
    {
      id: 4,
      name: "Plant Scanner & Identifier",
      description: "Plant Scanner is a web application that identifies plants from uploaded images using AI technology.",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      skills: ["React19","CSS3","JavaScript","Vite","Axios","Plant.id API"],
      githubLink: "https://github.com/Jagjitbiswal2003/Plant-scanner"
    },
    {
      id: 5,
      name: "Sudoku Game",
      description: "Interactive Sudoku puzzle game with multiple difficulty levels, hint system, and progress tracking features.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      skills: ["HTML5","CSS3","JavaScript","Recursion & Backtracking","Array"],
      githubLink: "https://github.com/Jagjitbiswal2003/Sudoku-Game"
    },
    {
  id: 6,
  name: "State Management with Redux Toolkit",
  description: "A comprehensive state management implementation demonstrating modern Redux patterns with async operations and middleware.",
  image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  skills: ["Redux Toolkit", "React", "JavaScript", "Middleware"],
  githubLink: "https://github.com/Jagjitbiswal2003/Redux-Toolkit"
     }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore my portfolio of diverse projects showcasing full-stack development, AI integration, and problem-solving skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col w-full max-w-sm"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Project Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {project.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 shadow-sm hover:shadow-md"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;