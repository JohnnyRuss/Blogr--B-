import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Logo } from "../layouts";

const Footer: React.FC = () => {
  return (
    <Container
      fluid
      className="bg-footer text-body-copy py-8rem text-capitalize"
    >
      <Container>
        <Row>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <Logo />
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <p className="text-txt">product</p>
            <ul className="d-flex flex-column align-items-center align-items-md-start">
              {[
                "overview",
                "pricing",
                "marketplace",
                "features",
                "integrations",
              ].map((route) => (
                <li className="cursor-pointer" key={route}>
                  {route}
                </li>
              ))}
            </ul>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <p className="text-txt">company</p>
            <ul className="d-flex flex-column align-items-center align-items-md-start">
              {["about", "team", "blog", "careers"].map((route) => (
                <li className="cursor-pointer" key={route}>
                  {route}
                </li>
              ))}
            </ul>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <p className="text-txt">connect</p>
            <ul className="d-flex flex-column align-items-center align-items-md-start">
              {["contact", "newsletter", "linkedin"].map((route) => (
                <li className="cursor-pointer" key={route}>
                  {route}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
