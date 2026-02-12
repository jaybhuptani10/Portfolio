import "./home.css";
import { MagneticButton } from "../utils/MagneticButton";
import PropTypes from "prop-types";

const Right = ({ navbar, setNavbar, currentPage }) => {
  const onMenuClick = () => {
    setNavbar(!navbar); // Toggle navbar state
  };

  return (
    <div className="flex right dark:bg-[#F1DEDC] sm:dark:bg-[#F1DEDC] sm:py-10 flex-col h-screen text-white items-center justify-between fixed">
      <MagneticButton className="z-[1001] relative">
        <svg
          onClick={onMenuClick} // Handles both opening and closing
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 cursor-pointer dark:text-black"
        >
          {navbar ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12" // Close icon
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" // Menu icon
            />
          )}
        </svg>
      </MagneticButton>

      <h2 className="right-h2 uppercase dark:text-black">{currentPage}</h2>

      <div className="flex flex-col gap-2 cursor-pointer socials socials-up dark:text-black">
        <MagneticButton>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jay-bhuptani-566343194/"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
              className="dark:text-black"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
        </MagneticButton>

        <MagneticButton>
          <a target="_blank" rel="noreferrer" href="https://x.com/BhuptaniJay">
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
              className="dark:text-black"
            >
              <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
            </svg>
          </a>
        </MagneticButton>

        <MagneticButton>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jaybhuptani10"
          >
            {" "}
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="2em"
              width="2em"
              className="dark:text-black"
            >
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
        </MagneticButton>
      </div>
    </div>
  );
};

Right.propTypes = {
  navbar: PropTypes.bool.isRequired,
  setNavbar: PropTypes.func.isRequired,
  currentPage: PropTypes.string,
};

export default Right;
