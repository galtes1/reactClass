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
 _id,
 handleCardDelete,
 handleCardLike,
 userId,
}) {
 const { user } = useUser();
 const navigate = useNavigate();
 const handleCardEdit = (_id) => {
  console.log("lets go and edit card no " + _id);
  navigate(ROUTES.EDIT_CARD + "/" + _id);
 };

 return (
  <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
   {user && (user.isAdmin || user._id === userId) ? (
    <Box>
     <IconButton onClick={() => handleCardDelete(_id)}>
      <DeleteIcon />
     </IconButton>
     <IconButton onClick={() => handleCardEdit(_id)}>
      <ModeEditIcon />
     </IconButton>
    </Box>
   ) : null}
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
