import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";
import { ParagraphsList } from "../layouts";
import { untitledParagraphs } from "../../utils/data";

const UntitledSection: React.FC = () => {
  return (
    <Container
      fluid
      className="bgi-pattern-laptop invasion-bottom-right-footer"
    >
      <Container className="py-4rem py-md-14rem d-flex flex-column flex-md-row">
        <Figure className="d-md-none">
          <Figure.Image
            src="/assets/illustration-laptop-mobile.svg"
            alt="untitled illustration"
          />
        </Figure>
        <ParagraphsList data={untitledParagraphs} containerClasses="ms-auto" />
      </Container>
    </Container>
  );
};

export default UntitledSection;
