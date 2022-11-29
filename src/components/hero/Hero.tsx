import React from "react";
import Container from "react-bootstrap/Container";
import { BTN } from "../layouts";

const Hero: React.FC = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center gap-4 text-txt py-14rem">
      <h2 className="fs-app-h2 text-center text-md-center">
        A modern publishing platform
      </h2>
      <p className="text-center text-md-center">
        Grow your audience and build your online brand
      </p>
      <div className="d-flex gap-4">
        <BTN primary={true} title="start for free" />
        <BTN secondary={true} title="learn more" />
      </div>
    </Container>
  );
};

export default Hero;
