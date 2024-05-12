import React from "react";
import { useUser } from "../providers/UserProvider";
import { Box, Typography } from "@mui/material";
import { getUserData } from "../services/usersApiService";

export default function CustomProfilePage() {
  const { user } = useUser();

  console.log(getUserData(user));
  return (
    <>
      <Box>
        <Typography>{getUserData(user)}</Typography>
      </Box>
    </>
  );
}
