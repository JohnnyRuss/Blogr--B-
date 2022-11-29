import React from "react";
import Button from "react-bootstrap/Button";

interface BTNType {
  className?: string;
  primary?: boolean;
  secondary?: boolean;
  secondaryThin?: boolean;
  size?: "lg" | "sm";
  title: string;
  loginBtn?: boolean;
}

const BTN: React.FC<BTNType> = ({
  className,
  primary,
  secondary,
  secondaryThin,
  size = "lg",
  title,
  loginBtn,
}) => {
  const baseStyles = "rounded-5 text-capitalize px-5 py-3";
  return primary ? (
    <Button
      className={`${
        loginBtn ? "text-txt text-md-cta bg-cta bg-md-txt" : "bg-txt text-cta"
      } border-0 align-self-center ${baseStyles} ${className || ""}`}
      size={size}
    >
      {title}
    </Button>
  ) : secondaryThin ? (
    <Button
      className={`bg-transparent border-0 text-dark-gray-blue ${baseStyles} ${
        className || ""
      }`}
      size={size}
    >
      {title}
    </Button>
  ) : secondary ? (
    <Button
      className={`bg-transparent border border-txt text-txt ${baseStyles} ${
        className || ""
      }`}
      size={size}
    >
      {title}
    </Button>
  ) : (
    <button className={className || ""}>{title}</button>
  );
};

export default BTN;
