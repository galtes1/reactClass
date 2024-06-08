import {
 Button,
 Dialog,
 DialogActions,
 DialogContent,
 DialogContentText,
 DialogTitle,
} from "@mui/material";
import React from "react";
import { bool, func } from "prop-types";

const CardDeleteDialog = ({
 isDialogOpen,
 onDelete,
 onChangeDialog,
 cardId,
}) => {
 return (
  <Dialog
   open={isDialogOpen}
   onClose={onChangeDialog}
   aria-labelledby="alert-dialog-title"
   aria-describedby="alert-dialog-description"
   maxWidth="xs"
  >
   <DialogTitle id="alert-dialog-title">
    {"Delete this card? sure?"}
   </DialogTitle>
   <DialogContent>
    <DialogContentText id="alert-dialog-description">
     This is permanent action, with no return.
    </DialogContentText>
   </DialogContent>
   <DialogActions>
    <Button onClick={onChangeDialog} color="error">
     cancel
    </Button>
    <Button onClick={() => onDelete(cardId)} color="info">
     delete
    </Button>
   </DialogActions>
  </Dialog>
 );
};
CardDeleteDialog.propTypes = {
 isDialogOpen: bool.isRequired,
 onChangeDialog: func.isRequired,
 onDelete: func.isRequired,
};

export default CardDeleteDialog;
