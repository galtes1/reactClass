import React from "react";
import { useUser } from "../../../../users/providers/UserProvider";
import CustomLogged from "./CustomLogged";
import CustomNotLogged from "./CustomNotLogged";
import { Box, IconButton } from "@mui/material";

export default function CustomRightNavBar() {
 const { user } = useUser();
 return (
  <>
   <Box
    sx={{
     display: { xs: "none", md: "inline-flex" },
     alignItems: "center",
    }}
   >
    <IconButton sx={{ ml: 1 }}></IconButton>
    {user && <CustomLogged />}
    {!user && <CustomNotLogged />}
   </Box>
  </>
 );
}
