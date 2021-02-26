import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { DATA } from "../common";

const Lecturers = () => {
  return (
    <>
      <h2 className="text-center m-0 my-3 h3 featured">Featured Lecturers</h2>
      <div className="lecturers">
        {DATA.sort((a, b) =>
          a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
        ).map(({ id, name, logo, url }) => (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="lecturers__card"
            key={id}
          >
            <img variant="top" src={logo} alt={`${name} logo`} />
            <div className="p-2 mt-2 text">
              <div className="text-capitalize text-secondary m-0 p-0">
                {name}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Lecturers;
