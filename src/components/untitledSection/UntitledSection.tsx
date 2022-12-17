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
      <Container className="py-6rem py-lg-14rem py-xxl-20rem d-flex flex-column flex-lg-row">
        <Figure className="d-lg-none d-flex justify-content-center">
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
