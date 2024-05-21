import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import React, { useState } from "react";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardDeleteDialog from "./CardDeleteDialog";

export default function CardActionBar({
  cardId,
  handleCardLike,
  userId,
  handleDelete,
}) {
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);

  const navigate = useNavigate();

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleCardDelete = () => {
    handleDialog(false);
    handleDelete(cardId);
  };

  const handleCardEdit = (id) => {
    console.log("lets go and edit card no " + id);
    navigate(ROUTES.EDIT_CARD + "/" + cardId);
    console.log(cardId);
  };

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        {user && (user.isAdmin || user._id === userId) ? (
          <Box>
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
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
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleCardDelete}
      />
    </>
  );
}
