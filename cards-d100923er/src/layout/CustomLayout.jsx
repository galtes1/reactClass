import React from "react";
import CustomHeader from "./header/CustomHeader";
import CustomMain from "./main/CustomMain";
import CustomFooter from "./footer/CustomFooter";

export default function CustomLayout({ children }) {
  return (
    <>
      <CustomHeader />
      <CustomMain>{children}</CustomMain>
      <CustomFooter />
    </>
  );
}
