import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import { ParagraphsList } from "../layouts";
import { futureParagraphs } from "../../utils/data";

const Future: React.FC = () => {
  return (
    <Container
      fluid
      className="bgi-pattern-editor invasion-bottom-right-dark-blue"
    >
      <Container className="py-6rem py-lg-14rem py-xxl-20rem">
        <h3 className="mb-3rem mb-md-8rem fs-app-h3 text-center text-heading">
          Designed for future
        </h3>
        <Figure className="d-lg-none d-flex justify-content-center">
          <Figure.Image
            src="/assets/illustration-editor-mobile.svg"
            alt="future editor illustration"
          />
        </Figure>
        <ParagraphsList data={futureParagraphs} />
      </Container>
    </Container>
  );
};

export default Future;
