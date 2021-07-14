import React, { Component } from "react";
import MenuSection from "../../components/menu/menu.component";
import HeaderComponent from "../../components/header/header.component";
import FooterSection from "../../components/footer/footer.component";
import BodyComponent from "../../components/body/body.component";
function LandingPage() {
  return (
    <div>
      Landing Page
      <MenuSection />
      <HeaderComponent />
      <BodyComponent />
      <FooterSection />
    </div>
  );
}

export default LandingPage;
