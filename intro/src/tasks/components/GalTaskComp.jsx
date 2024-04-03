import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function GalTaskComp({ task }) {
  return (
    <Container sx={{ color: "text.secondary", direction: "rtl", m: 10 }}>
      <Typography>
        <strong>שם: </strong>
        {task.name}
      </Typography>
      <Typography>
        <strong>תאריך: </strong>
        {task.date}
      </Typography>
      <Typography>
        <strong>סוג: </strong>
        {task.type}
      </Typography>
    </Container>
  );
}
