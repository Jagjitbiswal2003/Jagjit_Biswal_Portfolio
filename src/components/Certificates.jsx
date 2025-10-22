import React from 'react';

const Certificate = () => {
  const certifications = [
    {
      id: 1,
      name: "MongoDB",
      provider: "Simplilearn",
      date: "January 2025",
      skills: ["CRUD Operations","Aggregation Framework","Indexing","Schema Design","Data Modeling"],
      link: "https://simpli-web.app.link/e/8m2XMgqyzXb"
    },
    {
      id: 2,
      name: "Front-end Software Engineering job Simulation",
      provider: "Skyscanner",
      date: "April 2024",
      skills: ["React","React Router","React Hooks","Redux","Tailwind CSS","Axios"],
      link: "https://drive.google.com/file/d/1Iuptnu5OSUDmBjZaUR-S3v8QRiKIuFO0/view"
    },
    {
      id: 3,
      name: "OOPs in Java",
      provider: "Great Learning",
      date: "August 2021",
      skills: ["Java", "OOPs", "Encapsulation", "Abstraction","Polymorphism","Inheritance"],
      link: "https://www.mygreatlearning.com/certificate/EUMPRBLO"
    },
    {
      id: 4,
      name: "Data Structures and Algorithm using Java",
      provider: "NPTEL",
      date: "October 2022",
      skills: ["Java", "Algorithms", "Data Structures","Problem Solving & Logic Building"],
      link: "https://drive.google.com/file/d/1zR8LjkAxxHW8mPrV4rOEaHHWqs1M2iN4/view?usp=drive_link"
    },
    {
      id: 5,
      name: "GenAI Powered Data Analytics job Simulation",
      provider: "TATA Group",
      date: "August 2025",
      skills: ["Python", "Tableau", "MYSQL", "Data Analysis","Excel","GenAI","Data-Driven Decision Making"],
      link: "https://drive.google.com/file/d/147svLY2L19FxIfjbMttssmz-Gx8SVi9J/view"
    },
    {
      id: 6,
      name: "Data Analytics job Simulation",
      provider: "Deloitte",
      date: "July 2025",
      skills: ["Python","PowerBI","Data Visualization","MYSQL","Data Cleaning & Preprocessing"],
      link: "https://drive.google.com/file/d/1ETD-rzVanR2gzkWbC3v-QYKIStHPfgmb/view"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Certifications
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Validated skills and knowledge through industry-recognized certifications and courses.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 flex flex-col"
            >
              {/* Certificate Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                    {cert.provider}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {cert.date}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {cert.name}
                </h3>
                
                <div className="flex items-center text-sm text-gray-600 mb-3">

                </div>
              </div>

              {/* Skills */}
              <div className="mb-6 flex-1">
                <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                  Skills Covered:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Verify Certificate
              </a>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Continuous Learning Journey
            </h2>
            <p className="text-gray-600 mb-6">
              These certifications represent my commitment to continuous learning and professional development 
              in the ever-evolving field of technology.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Platforms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-600">Skills Mastered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">1 Year</div>
                <div className="text-sm text-gray-600">Learning Span</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;