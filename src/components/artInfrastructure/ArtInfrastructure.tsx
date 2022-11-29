import React from "react";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";

const ArtInfrastructure: React.FC = () => {
  return (
    <Container
      fluid
      className="text-txt bgi-pattern-circles invasion-bottom-left-dark-blue"
    >
      <Container className="position-relative d-flex pt-14rem pt-md-8rem pb-8rem">
        <Figure className="art-infrastructure--fig">
          <Figure.Image
            src="/assets/illustration-phones.svg"
            alt="art infrastructures illustration"
            className="w-100 h-100"
          />
        </Figure>
        <div className="w-full w-md-half ms-auto d-flex flex-column gap-2 text-center text-md-start">
          <h4 className="fs-app-h4">State of the Art Infrastructure</h4>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </Container>
    </Container>
  );
};

export default ArtInfrastructure;
