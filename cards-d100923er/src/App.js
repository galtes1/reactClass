import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import CustomLayout from "./layout/CustomLayout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
 return (
  <BrowserRouter>
   <SnackbarProvider>
    <UserProvider>
     <CustomThemeProvider>
      <CustomLayout>
       <Router />;
      </CustomLayout>
     </CustomThemeProvider>
    </UserProvider>
   </SnackbarProvider>
  </BrowserRouter>
 );
}

export default App;
