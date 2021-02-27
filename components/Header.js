import React from "react";

const Header = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="m-0 mb-1">CS1000</h1>
        <p className="text-secondary m-0 mb-2">
          I've switched to <code>web.archive.org</code> for faster rendering of
          this page. Current version is: <code>02/10/2021</code>.
        </p>
      </div>
      <nav className="container-fluid">
        <div className="text-center mb-3 row mx-auto">
          <a href="#" className="col col-4" id="toggle">
            Lights off
          </a>
          <a
            href="https://laconicml.com/computer-science-curriculum-youtube-videos/"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-4"
          >
            Reference
          </a>
          <a
            href="https://github.com/tpkahlon/cs1000"
            target="_blank"
            rel="noopener noreferrer"
            className="col col-4"
          >
            Source
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
