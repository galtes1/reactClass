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
 userId,
 handleDelete,
 handleLike,
 cardLikes,
}) {
 const { user } = useUser();
 const [isDialogOpen, setDialog] = useState(false);
 const [isLiked, setIsLiked] = useState(
  () => cardLikes && cardLikes.includes(user?._id)
 );
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
  navigate(ROUTES.EDIT_CARD + "/" + cardId);
 };

 const handleCardLike = async () => {
  await handleLike(cardId);
  setIsLiked((prev) => !prev);
 };
 
 const handlePhone = (cardId)=>{
    alert("please call")
    navigate(ROUTES.CARD_INFO+"/"+cardId)
 }

 return (
  <>
   <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
    {user && (user.isAdmin || user._id === userId) ? (
     <Box>
      <IconButton
       aria-label="delete card"
       onClick={() => handleCardDelete(cardId)}
      >
       <DeleteIcon />
      </IconButton>
      <IconButton onClick={() => handleCardEdit(cardId)}>
       <ModeEditIcon />
      </IconButton>
     </Box>
    ) : null}
    <Box>
     <IconButton onClick={()=>handlePhone(cardId)}>
      <CallIcon />
     </IconButton>
     <IconButton
      aria-label="like this card"
      onClick={() => handleCardLike(cardId)}
     >
      <FavoriteIcon color={isLiked ? "error" : "inherit"} />
     </IconButton>
    </Box>
   </CardActions>
   <CardDeleteDialog
    isDialogOpen={isDialogOpen}
    onChangeDialog={() => setDialog(false)}
    onDelete={handleCardDelete}
    cardId={cardId}
   />
  </>
 );
}
