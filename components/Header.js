import React, { useRef, useState } from "react";
import { FaDownload, FaGithub } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { RiLightbulbFlashLine, RiLightbulbLine } from "react-icons/ri";

const Header = ({ token }) => {
  const toggleMode = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    document.body.classList.toggle("dark-mode");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <>
      <div className="text-center">
        <h1 className="m-0 mb-1">CS1000</h1>
        <p className="text-secondary m-0 mb-2">
          This page uses{" "}
          <a
            href="https://web.archive.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            web.archive.org
          </a>{" "}
          for optimal rendering. Latest time machine{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://web.archive.org/__wb/calendarcaptures/2?url=https://laconicml.com/computer-science-curriculum-youtube-videos/&date=2021"
          >
            snapshot token
          </a>{" "}
          is: <code>{token}</code>.
        </p>
      </div>
      <nav className="container-fluid">
        <div className="row">
          <a
            href="#"
            className="col col-3 d-flex align-items-center justify-content-center"
            id="toggle"
            title="Toggle mode"
            ref={toggleMode}
            onClick={handleClick}
            rel="noopener noreferrer"
          >
            {isDarkMode ? (
              <>
                <RiLightbulbFlashLine />
                <span className="sr-only">Lights on</span>
              </>
            ) : (
              <>
                <RiLightbulbLine />
                <span className="sr-only">Lights off</span>
              </>
            )}
          </a>
          <a
            href="https://laconicml.com/computer-science-curriculum-youtube-videos/"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-3 d-flex align-items-center justify-content-center"
            title="Reference"
          >
            <VscReferences />
            <span className="sr-only">Reference</span>
          </a>
          <a
            href="https://github.com/tpkahlon/cs1000"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-3 d-flex align-items-center justify-content-center"
            title="Source"
          >
            <FaGithub />
            <span className="sr-only">Source</span>
          </a>
          <a
            href="https://www.reddit.com/r/DataHoarder/comments/kyg97u/entire_mit_computer_science_curriculum_in_1079/"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-3 d-flex align-items-center justify-content-center"
            title="Download"
          >
            <FaDownload />
            <span className="sr-only">Download</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
