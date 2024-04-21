import { useMediaQuery, useTheme as useMuiTheme } from "@mui/material";
import { createContext, useState } from "react";

const MenuContext = createContext(null);
export const MenuProvider = ({ children }) => {
 const theme = useMuiTheme();
 const screenSize = useMediaQuery(theme.breakpoints.up("md"));

 const [isOpen, setIsOpen] = useState(false);
 const [anchorEL, setAnchor] = useState(null);

 return (
  <>
   <MenuContext.Provider>{children}</MenuContext.Provider>
  </>
 );
};
