import React from "react";

interface HeaderType {
  children: React.ReactNode;
}

const Header: React.FC<HeaderType> = ({ children }) => {
  return <header className="invasion-bottom-left-cta pt-8rem bgi-pattern-intro-desktop">{children}</header>;
};

export default Header;
