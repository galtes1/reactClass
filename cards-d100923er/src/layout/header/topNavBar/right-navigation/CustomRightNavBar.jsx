import React, { useEffect } from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import CustomLogged from "./CustomLogged";
import CustomNotLogged from "./CustomNotLogged";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CustomMoreMenu from "./CustomMoreMenu";
import CustomSearchBar from "./CustomSearchBar";
import { useState } from "react";
import useUsers from "../../../../users/hooks/useUsers";

export default function CustomRightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();
  const [userData, setUserData] = useState(false);
  const { handleGetUser } = useUsers();

  useEffect(() => {
    user
      ? handleGetUser(user._id).then((data) => {
          setUserData(data);
        })
      : setUserData(false);
  }, [user, handleGetUser]);

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <CustomSearchBar />
        <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
        {user && <CustomLogged userData={userData} />}
        {!user && <CustomNotLogged />}
      </Box>
      <CustomMoreMenu />
    </>
  );
}
