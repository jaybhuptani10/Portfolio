import React from "react";

const Page4 = () => {
  const experiences = [
    {
      role: "SPACE RESEARCH INTERN",
      company: "Space Applications Centre - ISRO",
      duration: "June 2024 - August 2024",
      type: "Internship",
      achievements: [
        "Joined India's premier space research organization for a 10-week intensive internship program",
        "Gaining hands-on experience in space applications and satellite data processing",
        "Working with cutting-edge space technology and research methodologies",
        "Collaborating with experts in the field of space science and applications",
      ],
      gradient: "from-orange-500 to-red-600",
    },
    {
      role: "FULL STACK DEVELOPER INTERN",
      company: "DataVidwan",
      duration: "March 2024 - June 2024",
      type: "Internship",
      achievements: [
        "Developed and deployed 2 live scalable web applications using MERN Stack (MongoDB, Express.js, React.js, Node.js)",
        "Built intuitive and efficient admin dashboards for seamless backend management",
        "Worked hands-on with AWS services for deployment, data handling, and performance optimization",
        "Collaborated with talented team following agile practices throughout the development cycle",
      ],
      gradient: "from-blue-500 to-purple-600",
    },

    {
      role: "DATA SCIENCE INTERN",
      company: "Upskill Campus",
      duration: "April 2024 - June 2024",
      type: "Internship",
      achievements: [
        "Developed and implemented data analysis pipelines using pandas and scikit-learn to extract insights from large datasets",
        "Led a group project focused on forecasting traffic patterns for smart city development",
        "Built machine learning models to predict traffic flow, improving traffic management systems",
        "Applied statistical analysis and data visualization techniques for comprehensive reporting",
      ],
      gradient: "from-green-500 to-teal-600",
    },
    {
      role: "FRONT-END DEVELOPER",
      company: "Divine Connection",
      duration: "Feb 2024 - April 2024",
      type: "Contract",
      achievements: [
        "Developed interactive and visually appealing user interfaces using React and Framer Motion",
        "Collaborated with team members to integrate front-end components seamlessly with back-end functionalities",
        "Adapted to new technologies and frameworks to meet project requirements and improve development efficiency",
        "Implemented responsive design principles ensuring optimal user experience across devices",
      ],
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br ">
      <div className="container mx-auto py-16 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-6">
              Experience
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 dark:text-gray-800 mt-8 max-w-4xl mx-auto leading-relaxed">
            As a passionate developer, I continuously explore diverse
            frameworks, languages, and technologies to sharpen my craft and
            deliver impactful digital experiences.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-20 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex flex-col md:flex md:items-center`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-purple-500 rounded-full z-10 shadow-lg"></div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="group relative">
                  {/* Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent hover:scale-[1.02]">
                    {/* Gradient header */}
                    <div
                      className={`h-2 bg-gradient-to-r ${exp.gradient}`}
                    ></div>

                    <div className="p-8">
                      {/* Role badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${exp.gradient} shadow-lg`}
                        >
                          {exp.type}
                        </span>
                        <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {exp.duration}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <h4
                        className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent mb-6`}
                      >
                        {exp.company}
                      </h4>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-3"
                          >
                            <div
                              className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-2 flex-shrink-0`}
                            ></div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r ${exp.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                  <div
                    className={`absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r ${exp.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-3xl shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready for New Challenges
            </h3>
            <p className="text-blue-100 text-lg">
              Looking forward to many more learning opportunities ahead! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
