import { Box } from "@mui/material";
import React from "react";

export default function CustomMain({ children }) {
 return <Box sx={{ minHeight: "90vh" }}>{children}</Box>;
}
