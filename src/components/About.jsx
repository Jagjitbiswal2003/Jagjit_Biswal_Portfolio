import React from "react";

export default function About() {
  const educationData = [
    {
      title: "NIST University, Berhampur",
      degree: "Degree - Bachelor of Technology",
      branch: "Branch - Computer Science and Engineering",
      details: "C.G.P.A: 8.58",
      color: "bg-blue-500",
      icon: "🎓",
      year: "2021 - 2025"
    },
    {
      title: "Royal HS School of Science and Technology, Bhubaneswar",
      degree: "Class- XII",
      branch: "Stream - Science",
      details: "Marks: 79.16%",
      color: "bg-blue-500",
      icon: "📚",
      year: "2019 - 2021"
    },
    {
      title: "Mahatab Nodal High School, Jajpur",
      degree: "Class- X",
      branch: "Stream - General",
      details: "Marks: 78.16%",
      color: "bg-blue-500",
      icon: "🏫",
      year: "2019"
    },
  ];

  const achievements = [
    {
      icon: "🚀",
      description: "Built multiple MERN stack projects integrating modern UI and APIs with real-time functionality."
    },
    {
      icon: "🏆",
      description: "Maintained excellent academic performance throughout semesters with consistent grades."
    },
    {
      icon: "⭐",
      description: "I earned 5-star ratings in C++ and Java on HackerRank."
    },
    {
      icon: "💻",
      description: "I secured 67th rank in the Alexa Code Conquest 2.0 coding event organized by Coding Ninjas."
    },
    {
      icon: "🏆",
      description: "I successfully qualified for the Math Olympiad exam in class 9."
    }
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 px-6 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
        
        {/* Intro */}
        <p className="text-base md:text-lg text-gray-700 max-w-2xl md:max-w-3xl mx-auto leading-relaxed text-justify">
          Hi, I'm <span className="font-bold text-blue-600">Jagjit Biswal</span>, I completed my Bachelor of Technology in Computer Science and Engineering from NIST University. I'm 
          passionate about web development, especially the MERN stack, and I enjoy 
          creating modern, responsive, and user-friendly web applications.
        </p>
      </div>

      {/* Layout Grid */}
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
        {/* Left - Education Timeline */}
        <div>
          <div className="flex items-center mb-8 md:mb-10">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-white text-lg md:text-xl">🎓</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Education
            </h3>
          </div>

          {/* Enhanced Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-blue-200"></div>
            
            {educationData.map((edu, index) => (
              <div key={index} className="relative mb-6 md:mb-8 group">
                {/* Timeline Marker */}
                <div className={`absolute left-4 md:left-6 w-3 h-3 md:w-4 md:h-4 rounded-full ${edu.color} border-2 md:border-4 border-white shadow-lg transform -translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300`}></div>
                
                {/* Content Card */}
                <div className="ml-8 md:ml-16 bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden">
                  {/* Header with Consistent Blue Color */}
                  <div className="bg-blue-500 p-3 md:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <span className="text-xl md:text-2xl text-white">{edu.icon}</span>
                        <div>
                          <h4 className="text-lg md:text-xl font-bold text-white">
                            {edu.title}
                          </h4>
                          <p className="text-blue-100 text-sm md:text-base font-medium">{edu.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 md:p-6">
                     <p className="text-gray-800 font-semibold text-base md:text-lg mb-1">
                       {edu.degree}
                         </p>
                     <p className="text-gray-600 mb-2 text-sm md:text-base">
                          {edu.branch}
                     </p>
                    <p className="text-gray-600 bg-gray-50 py-2 rounded-lg inline-block font-medium text-sm md:text-base">
                      {edu.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Enhanced Achievements Section */}
        <div>
          <div className="flex items-center mb-8 md:mb-10">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3 md:mr-4">
              <span className="text-white text-lg md:text-xl">⭐</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Achievements
            </h3>
          </div>

          <div className="space-y-10 md:space-y-12">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group bg-white rounded-xl md:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
              >
                <div className="p-4 mb-3 md:p-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-base md:text-lg">{achievement.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect Border */}
                <div className="w-0 h-1 bg-blue-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}