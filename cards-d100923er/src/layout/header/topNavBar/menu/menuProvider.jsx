import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Box, useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import CustomMenu from "./CustomMenu";
import { node } from "prop-types";

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
 const theme = useMuiTheme();
 const screenSize = useMediaQuery(theme.breakpoints.up("md"));

 const [isOpen, setIsOpen] = useState(false);
 const [anchorEL, setAnchor] = useState(null);

 const anchorRef = useRef();

 useEffect(() => {
  setAnchor(anchorRef.current);
 }, []);


 useEffect(() => {
  setIsOpen(false);
 }, [screenSize]);

 return (
  <>
   <MenuContext.Provider value={setIsOpen}>{children}</MenuContext.Provider>

   <Box
    ref={anchorRef}
    component="span"
    position="fixed"
    top="70px"
    right="20px"
   ></Box>
   {anchorEL && (
    <CustomMenu
     anchorEl={anchorEL}
     isOpen={isOpen}
     onClose={() => setIsOpen(false)}
    />
   )}
  </>
 );
};

export const useMenu = () => {
 const context = useContext(MenuContext);
 if (!context) throw new Error("useMenu must be used within a MenuProvider");
 return context;
};

MenuProvider.propTypes = {
 children: node.isRequired,
};
