import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BTN, Logo } from "../layouts";

import "./main-nav.scss";

interface RoutesType {
  route: string;
  dropDownRoutes?: { route: string }[];
}

const navRoutes: RoutesType[] = [
  {
    route: "product",
    dropDownRoutes: [
      { route: "overview" },
      { route: "pricing" },
      { route: "marketplace" },
      { route: "features" },
      { route: "integrations" },
    ],
  },
  {
    route: "company",
    dropDownRoutes: [
      { route: "about" },
      { route: "team" },
      { route: "blog" },
      { route: "careers" },
    ],
  },
  {
    route: "connect",
    dropDownRoutes: [
      { route: "contact" },
      { route: "newsletter" },
      { route: "linkedin" },
    ],
  },
];

const Navigation: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="md" fixed="top" className="bg-cta">
      <Container fluid="lg" className="p-1rem">
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse
          className="justify-content-between align-items-center gap-5 mt-4 mt-md-0 ms-md-5 p-4 p-md-0 rounded-app-sm rounded-md-0 bg-app-white bg-md-transparent shadow-large shadow-md-none"
          id="main-nav"
        >
          <Nav className="nav-border pb-3 mb-3 mb-md-0 pb-md-0">
            {navRoutes.map((route, i) => {
              return route.dropDownRoutes ? (
                <NavDropdown
                  title={route.route}
                  key={route.route}
                  id="nav-dropdown"
                  className="main-nav-drop-down text-footer text-md-txt text-center text-md-start text-capitalize"
                  aria-expanded="true"
                >
                  {route.dropDownRoutes.map((nestedRoute) => (
                    <NavDropdown.Item
                      href={`#${nestedRoute.route}`}
                      key={nestedRoute.route}
                    >
                      {nestedRoute.route}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  className="text-footer text-md-txt text-center text-md-start text-capitalize"
                  href={`#${route.route}`}
                  key={route.route}
                >
                  {route.route}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="gap-3">
            <BTN secondaryThin={true} title="login" />
            <BTN primary={true} title="sign up" loginBtn={true} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
