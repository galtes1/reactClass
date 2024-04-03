import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

export default function CustomFormPage() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChangeEmail = (event) => {
    setUser((prev) => ({ ...prev, email: event.target.value }));
  };
  const handleChangePassword = (event) => {
    setUser((prev) => ({ ...prev, password: event.target.value }));
  };

  return (
    <Box
      sx={{
        width: 500,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: 2,
        borderRadius: 5,
        p: 3,
      }}
    >
      <TextField
        placeholder="email"
        value={user.email}
        onChange={handleChangeEmail}
      />
      <TextField
        placeholder="password"
        type="password"
        value={user.password}
        onChange={handleChangePassword}
      />
      <Button
        variant="contained"
        onClick={() => {
          console.log(user);
        }}
      >
        אישור
      </Button>
    </Box>
  );
}
