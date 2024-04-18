import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../providers/CustomThemeProvider";

export default function CustomNavBarLink({ children, sx, to }) {
  const { isDark } = useTheme();
  return isDark ? (
    <Link to={to} style={{ textDecoration: "none", ...sx, color: "white" }}>
      {children}
    </Link>
  ) : (
    <Link to={to} style={{ textDecoration: "none", ...sx, color: "#000" }}>
      {children}
    </Link>
  );
}
