import React, { createContext, useCallback, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
 const [isSnackOpen, setSnackOpen] = useState(false);
 const [snackColor, setSnackColor] = useState("success");
 const [snackVariant, setSnackVariant] = useState("filled");
 const [snackMessage, setSnackMessage] = useState("in snackbar");

 const setSnack = useCallback((color, message, variant = "filled") => {
  setSnackOpen(true);
  setSnackColor(color);
  setSnackVariant(variant);
  setSnackMessage(message);
 }, []);

 return (
  <>
   <SnackbarContext.Provider value={setSnack}>
    {children}
   </SnackbarContext.Provider>
   <Snackbar
    anchorOrigin={{ vertical: "top", horizontal: "center" }}
    open={isSnackOpen}
    onClose={() => {
     setSnackOpen(false);
    }}
    autoHideDuration={1500}
   >
    <Alert severity={snackColor} variant={snackVariant}>
     {snackMessage}
    </Alert>
   </Snackbar>
  </>
 );
}

export const useSnack = () => {
 const context = useContext(SnackbarContext);
 if (!context) throw Error("useSnackbar must be used within a NameProvider");
 return context;
};
