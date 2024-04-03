import React from "react";
import { CardMedia } from "@mui/material";

export default function CustomCardHeaderComponent({ image }) {
  return (
    <CardMedia component="img" height="140" image={image.url} alt={image.alt} />
  );
}
