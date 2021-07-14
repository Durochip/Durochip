import React, { Component } from "react";
import ContactUsComponent from "./contactpage/contactpage.component";
import HeroComponent from "./heropage/heropage.component";
import ServicesComponent from "./servicespage/servicespage.component";
function BodyComponent() {
  return (
    <div>
      <h2>
        <HeroComponent />
        <ServicesComponent />
        <ContactUsComponent />
      </h2>
    </div>
  );
}

export default BodyComponent;
