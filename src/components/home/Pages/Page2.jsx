import React from "react";

const Page2 = () => {
  return (
    <div className="p-10  flex-col sm:flex-row flex  gap-5">
      <div className="Profile-div-1  flex p-10 items-center justify-center flex-col">
        <p className="texts text-left w-90">
          As a third-year college student specializing in MERN stack
          development, I have crafted various projects leveraging this
          technology stack.
        </p>
        <p className="texts text-left w-90">
          My hands-on experience with MongoDB, Express.js, React, and Node.js
          has equipped me with the skills necessary to develop dynamic and
          responsive web applications.
        </p>
        <p className="texts text-left w-90">
          Despite being in the early stages of my academic journey, I am
          enthusiastic about further honing my expertise and contributing to
          innovative software projects
        </p>
      </div>
      <div className="Profile-div-2 flex flex-col gap-5">
        <div className="boxes flex flex-col p-10 justify-center">
          <h2 className="text-2xl texts">EDUCATION</h2>
          <p className="text-xl texts font-bold">Karnavati university</p>
          <p className="texts">
            Bachelor's Degree in Computer Science & Engineering
          </p>
          <p className="texts">2022-2026</p>
        </div>
        <div className="boxes flex flex-col p-10 justify-center">
          <h2 className="text-2xl texts">CONTACT DETAILS</h2>
          <p className="flex gap-2 texts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            jaybhuptani1054@gmail.com
          </p>
          <p className="flex gap-2 texts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            8141242093
          </p>
          <p className="flex gap-2 texts">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Ahmedabad, Gujarat, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
