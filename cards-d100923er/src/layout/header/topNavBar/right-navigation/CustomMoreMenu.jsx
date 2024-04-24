import React from "react";
import { useMenu } from "../menu/menuProvider";
import { Box, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";


export default function CustomMoreMenu() {
    const setOpen = useMenu();
 return (
    <Box sx={{ display: { xs: "inline-flex", md: "none" } }}>
        <IconButton
        onClick={() => setOpen(true)}
        size="large"
        color="inherit"
        aria-label="menu"
        sx={{ display: { xs: "inline-flex", md: "none" } }}
        >
            <MoreVertIcon/>
        </IconButton>
    </Box>
 )
}
