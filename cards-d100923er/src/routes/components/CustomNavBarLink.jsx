import React from "react";
import { Link } from "react-router-dom";

export default function CustomNavBarLink({ children, sx, to }) {
  return (
    <Link to={to} style={{ textDecoration: "none", ...sx, color: "#000" }}>
      {children}
    </Link>
  );
}
