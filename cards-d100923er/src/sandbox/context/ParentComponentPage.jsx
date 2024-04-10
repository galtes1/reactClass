import React from "react";
import ChildComponent from "./ChildComponent";
import DataProvider from "./DataProvider";

export default function ParentComponentPage() {
 return (
  <DataProvider>
   <div>
    Parent Component Page
    <ChildComponent />
   </div>
  </DataProvider>
 );
}
