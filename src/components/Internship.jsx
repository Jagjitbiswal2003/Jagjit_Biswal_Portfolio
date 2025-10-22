import React from 'react';

const Internships = () => {
  const internships = [
    {
      id: 1,
      company: "Teachnook",
      role: "Web Developer Intern",
      duration: "Sept 2022 - Oct 2022",
      description: "I completed my first internship at Technook as a Web Developer Intern from September to October 2022. During this one-month internship, I built a Blog Page Layout using HTML and CSS as an individual project and collaborated with a team of three to develop a Multicity Weather Tracker using HTML, CSS, JavaScript, and a weather API for real-time data.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      skills: ["HTML5","CSS3", "JavaScript", "React", "Git", "Axios Library", "Responsive Design"],
      achievements: [
        "Gained hands-on experience in creating responsive web designs for better user experience.",
        "Gained hands-on experience in integrating and working with APIs to connect applications with dynamic data and external services.",
        "Developed strong team collaboration and project coordination skills through group work."
      ]
    },
    {
      id: 2,
      company: "Oasis Infobyte",
      role: "MERN Stack Developer Intern",
      duration: "March 2024 - April 2024",
      description: "I completed my second internship at Oasis Infobyte as a MERN Stack Developer Intern from March to April 2024. During this one-month internship, I developed a personal portfolio website using React.js and Tailwind CSS as an individual project, and collaborated with a team of three to build a Personal Task Manager using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
      skills: ["React","Node.js", "MongoDB", "Express", "JavaScript","Redux","JWT","RESTful API"],
      achievements: [
      "Acquired practical, hands-on experience in full-stack development by building applications with the MERN stack.",
      "Enhanced problem-solving and debugging skills through real-world project implementation.",
      "Enhanced team collaboration and communication skills by effectively contributing to a dynamic, goal-oriented group environment."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            My Internships
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hands-on professional experience that shaped my development skills and industry understanding.
          </p>
        </div>

        {/* Internships Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block"></div>
          
          {/* Internship Cards */}
          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div 
                key={internship.id}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg hidden lg:block z-10"></div>

                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                    {/* Company Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={internship.image}
                        alt={internship.company}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute bottom-4 left-6">
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {internship.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {internship.company}
                        </h3>
                        <p className="text-lg text-blue-600 font-semibold">
                          {internship.role}
                        </p>
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {internship.description}
                      </p>

                      {/* Skills */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Technologies & Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-700 mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {internship.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="lg:hidden w-full h-8"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Professional Growth
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through these internships, I've gained valuable industry experience, enhanced my technical skills, 
            and learned to work effectively in professional team environments. Ready to bring this experience to new challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Internships;