import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React from "react";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

export default function CardActionBar({
  cardId,
  handleCardDelete,
  handleCardLike,
  userId,
}) {
  const { user } = useUser();
  const navigate = useNavigate();
  const handleCardEdit = (id) => {
    console.log("lets go and edit card no " + id);
    navigate(ROUTES.EDIT_CARD + "/" + cardId);
    console.log(cardId);
  };

  return (
    <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
      {user && (user.isAdmin || user._id === userId) ? (
        <Box>
          <IconButton onClick={() => handleCardDelete(cardId)}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={() => handleCardEdit(cardId)}>
            <ModeEditIcon />
          </IconButton>
        </Box>
      ) : null}
      <Box>
        <IconButton>
          <CallIcon />
        </IconButton>
        <IconButton onClick={() => handleCardLike(cardId)}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </CardActions>
  );
}
