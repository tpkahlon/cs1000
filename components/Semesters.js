import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { HiDotsVertical } from "react-icons/hi";

const Semesters = ({ result }) => {
  return (
    <Accordion>
      {result.map((i, index) => (
        <Card key={index} bg="dark" text="secondary">
          <Accordion.Toggle
            as={Card.Header}
            variant="link"
            eventKey={index.toString()}
            className="d-flex justify-content-between align-items-center p-3"
          >
            <div className="title">{i.title}</div>
            <div className="ml-3">
              <HiDotsVertical />
            </div>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={index.toString()}>
            <div
              dangerouslySetInnerHTML={{ __html: i.siblings }}
              className="siblings"
            ></div>
          </Accordion.Collapse>
        </Card>
      ))}
    </Accordion>
  );
};

export default Semesters;
