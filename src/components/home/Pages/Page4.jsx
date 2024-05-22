import React from "react";

const Page4 = () => {
  return (
    <div className="flex    z-10 flex-col">
      <div className="flex  flex-col sm:flex-row items-center justify-center px-20 ">
        <div className="page4-top  sm:px-20">
          <h1 className="text-5xl font-bold ">Experience.</h1>
          <p className="mt-10 text-xl">
            As a web developer, I've explored various frameworks, languages, and
            technologies, constantly pushing myself to learn and adapt.
          </p>
          <br />
          <p className="text-xl">
            {" "}
            And just like those nerve-wracking moments before a conference talk,
            the job hunt continues to be a blend of excitement and trepidation.
          </p>
        </div>
        <div className="page4-top sm:mr-9 relative">
          <img
            className="job-pic"
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="mt-20 px-10 sm:px-40 gap-3 flex sm:gap-10">
          <div className="text-left flex   sm:gap-10 items-center">
            <h1 className="w-20">DATA SCIENCE INTERN</h1>
            <div className="liti"></div>
          </div>

          <div className="info-right">
            <h2 className="uppercase">
              Upskill Campus | April 2024 - June 2024
            </h2>
            <p>
              Developing and implementing data analysis pipelines using
              libraries like pandas and scikit-learn to extract insights from
              large datasets
            </p>

            <p>
              Leading a group project focused on forecasting traffic patterns
              for a smart city.
            </p>
            <p>
              This project involved building a machine learning model to predict
              traffic flow, potentially improving traffic management and citizen
              commutes.
            </p>
          </div>
        </div>
        <div className="mt-20 mb-10 px-10 sm:px-40 gap-3 flex sm:gap-10">
          <div className="text-left flex gap-2  sm:gap-10 items-center">
            <h1 className="w-20">FRONT-END DEVELOPER</h1>
            <div className="liti"></div>
          </div>

          <div className="info-right">
            <h2 className="uppercase">
              Divine Connection| Feb 2024- APRIL 2024
            </h2>
            <p>
              Developed interactive and visually appealing user interfaces using
              React and Framer Motion
            </p>

            <p>
              Collaborated with team members to integrate front-end components
              seamlessly with back-end functionalities
            </p>
            <p>
              Adapted to new technologies and frameworks, such as React and
              Framer Motion, to meet project requirements and improve
              development efficiency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
