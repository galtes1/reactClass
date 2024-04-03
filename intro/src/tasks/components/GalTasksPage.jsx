import React from "react";
import GalTaskComp from "./GalTaskComp";
import { Container, Typography } from "@mui/material";

const tasks = [
  { name: "משימה 1", date: "03-03-2024", type: "שיעורי בית" },
  { name: "משימה 2", date: "04-03-2024", type: "ניקיון" },
  { name: "משימה 3", date: "05-03-2024", type: "שיעורי בית" },
  { name: "משימה 4", date: "06-03-2024", type: "שיעורי בית" },
  { name: "משימה 5", date: "07-03-2024", type: "ניקיון" },
  { name: "משימה 6", date: "08-03-2024", type: "מחקר" },
  { name: "משימה 7", date: "09-03-2024", type: "מחקר" },
  { name: "משימה 8", date: "10-03-2024", type: "מחקר" },
];

const search = "ק";
export default function GalTasksPage() {
  return (
    <Container sx={{ m: 10 }}>
      {tasks.map((task, index) =>
        task.type.includes(search) ? (
          <GalTaskComp task={task} key={index} />
        ) : null
      )}
    </Container>
  );
}
