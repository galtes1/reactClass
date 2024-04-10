import React from "react";
import { useData } from "./DataProvider";

export default function GrandChildComponent() {
 const context = useData();
 console.log(context);
 return <div>Grand Child Component. data 1 = {context.data1}</div>;
}
