import React from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import CustomLogged from "./CustomLogged";
import CustomNotLogged from "./CustomNotLogged";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function CustomRightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <CustomLogged />}
        {!user && <CustomNotLogged />}
      </Box>
    </>
  );
}
