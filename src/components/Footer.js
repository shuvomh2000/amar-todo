import React from "react";
import Container from "./layouts/Container";

const Footer = () => {
  return (
    <div className="py-7 bg-primary text-center">
      <Container>
        <button className="w-full">
          <h3 className="font-medium text-3xl capitalize text-white">
            create new
          </h3>
        </button>
      </Container>
    </div>
  );
};

export default Footer;
