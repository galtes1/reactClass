import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";

export default function CardActionBar({
  _id,
  handleCardDelete,
  handleCardLike,
}) {
  const handleCardEdit = (_id) => {
    console.log("lets go and edit card no " + _id);
  };
  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      <Box>
        <IconButton onClick={() => handleCardDelete(_id)}>
          <DeleteIcon />
        </IconButton>
        <IconButton onClick={() => handleCardEdit(_id)}>
          <ModeEditIcon />
        </IconButton>
      </Box>
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(_id)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}
