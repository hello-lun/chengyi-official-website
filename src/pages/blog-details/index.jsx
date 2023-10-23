import React from "react";
import BlogDetails from "@/components/blog-details/blog-details";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle="CHENGYI: Leading Supplier of PLC, HMI, Inverters, Servo Motors and More" />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
