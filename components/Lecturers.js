import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { DATA } from "../common";

const Lecturers = () => {
  return (
    <>
      <h2 className="text-center m-0 my-3 h3 featured">Featured Lecturers</h2>
      <CardColumns className="lecturers">
        {DATA.sort((a,b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1).map(({ id, name, logo, url }) => (
          <Card key={id}>
            <Card.Link href={url} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="top" src={logo} alt={`${name} logo`} />
              <Card.Body className="p-2 mt-2 text">
                <Card.Title className="text-capitalize text-secondary m-0 p-0">
                  {name}
                </Card.Title>
              </Card.Body>
            </Card.Link>
          </Card>
        ))}
      </CardColumns>
    </>
  );
};

export default Lecturers;
