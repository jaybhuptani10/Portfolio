import React from "react";

const Page4 = () => {
  return (
    <div className="flex flex-col w-full py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Header section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-black">
            Experience
          </h1>
          <p className="text-base sm:text-lg md:text-xl dark:text-black">
            As a passionate web developer, I continuously explore diverse
            frameworks, languages, and technologies to sharpen my craft and
            deliver impactful digital experiences.
          </p>
          <p className="text-base sm:text-lg md:text-xl dark:text-black">
            From building scalable applications to collaborating on innovative
            solutions, I embrace each opportunity to grow and create.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Developer working on code"
            />
          </div>
        </div>
      </div>

      {/* Experience items */}
      <div className="flex flex-col space-y-16">
        {/* Experience Item 1 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex items-center gap-3">
              <h2 className="text-sm sm:text-base font-semibold uppercase dark:text-black whitespace-normal md:whitespace-nowrap">
                FRONT-END DEVELOPER
              </h2>
              <div className="hidden md:block h-px w-16 bg-white dark:bg-black"></div>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4 space-y-3">
            <h3 className="text-sm sm:text-base font-medium uppercase dark:text-black text-white">
              Divine Connection | Feb 2024 - April 2024
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li className="text-sm sm:text-base dark:text-black text-white">
                Developed interactive and visually appealing user interfaces
                using React and Framer Motion
              </li>
              <li className="text-sm sm:text-base dark:text-black text-white">
                Collaborated with team members to integrate front-end components
                seamlessly with back-end functionalities
              </li>
              <li className="text-sm sm:text-base dark:text-black text-white">
                Adapted to new technologies and frameworks, such as React and
                Framer Motion, to meet project requirements and improve
                development efficiency
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Item 2 */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex items-center gap-3">
              <h2 className="text-sm sm:text-base font-semibold uppercase dark:text-black whitespace-normal md:whitespace-nowrap ">
                DATA SCIENCE INTERN
              </h2>
              <div className="hidden md:block h-px w-16 bg-white dark:bg-black "></div>
            </div>
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4 space-y-3">
            <h3 className="text-sm sm:text-base font-medium uppercase dark:text-black text-white">
              Upskill Campus | April 2024 - June 2024
            </h3>
            <ul className="space-y-2 list-disc list-inside">
              <li className="text-sm sm:text-base dark:text-black text-white">
                Developing and implementing data analysis pipelines using
                libraries like pandas and scikit-learn to extract insights from
                large datasets
              </li>
              <li className="text-sm sm:text-base dark:text-black text-white">
                Leading a group project focused on forecasting traffic patterns
                for a smart city
              </li>
              <li className="text-sm sm:text-base dark:text-black text-white">
                Building a machine learning model to predict traffic flow,
                potentially improving traffic management and citizen commutes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
