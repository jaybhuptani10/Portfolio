import React, { useState } from "react";

const Slider = ({ setLightMode }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <div
      className="slider cursor-pointer"
      style={{ backgroundColor: theme === "light" ? "#3e3e3f" : "#F9DC5C" }}
      onClick={changeTheme}
    >
      <svg
        fill="currentColor"
        className="text-yellow-600 sun"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        style={{ visibility: theme === "dark" ? "visible" : "hidden" }}
      >
        <path d="M8 12a4 4 0 100-8 4 4 0 000 8zM8 0a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 0zm0 13a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 018 13zm8-5a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2a.5.5 0 01.5.5zM3 8a.5.5 0 01-.5.5h-2a.5.5 0 010-1h2A.5.5 0 013 8zm10.657-5.657a.5.5 0 010 .707l-1.414 1.415a.5.5 0 11-.707-.708l1.414-1.414a.5.5 0 01.707 0zm-9.193 9.193a.5.5 0 010 .707L3.05 13.657a.5.5 0 01-.707-.707l1.414-1.414a.5.5 0 01.707 0zm9.193 2.121a.5.5 0 01-.707 0l-1.414-1.414a.5.5 0 01.707-.707l1.414 1.414a.5.5 0 010 .707zM4.464 4.465a.5.5 0 01-.707 0L2.343 3.05a.5.5 0 11.707-.707l1.414 1.414a.5.5 0 010 .708z" />
      </svg>
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        className="moon text-white"
        width="1.5em"
        style={{ visibility: theme === "dark" ? "hidden" : "visible" }}
      >
        <path d="M6 .278a.768.768 0 01.08.858 7.208 7.208 0 00-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 01.81.316.733.733 0 01-.031.893A8.349 8.349 0 018.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 016 .278z" />
      </svg>

      <div
        className="toggle"
        style={{ left: theme === "dark" ? "0px" : "63px" }}
      ></div>
    </div>
  );
};

export default Slider;
