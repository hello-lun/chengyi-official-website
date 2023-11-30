import React, { useState } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
