import React from "react";

const Page3 = () => {
  return (
    <div className="p-10  h-full w-full z-20">
      <h1 className="text-7xl px-2 sm:px-0 font-mono tracking-tighter dark:text-black">
        My Skills
      </h1>
      <div className="Skills mt-10 p-5 sm:p-10 flex gap-10 flex-wrap">
        <div className="skill-line">
          <div className="flex gap-5  items-center">
            <h3 className="skill-head dark:text-black ">React Js</h3>
            <div className="flex  gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head w-30 dark:text-black">MYSQL</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">Python</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
        </div>
        <div className="skill-line">
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">Node Js</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">MongoDB</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">Express</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
        </div>
        <div className="skill-line">
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black ">HTML</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">CSS</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">JAVA</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
        </div>
        <div className="skill-line">
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">Framer Motion</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <h3 className="skill-head dark:text-black">Tailwind CSS</h3>
            <div className="flex gap-2">
              <div className="skill"></div>
              <div className="skill"></div>
              <div className="skill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page3;
