import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import CustomLayout from "./layout/CustomLayout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";

function App() {
 return (
  <BrowserRouter>
   <UserProvider>
    <CustomThemeProvider>
     <CustomLayout>
      <Router />;
     </CustomLayout>
    </CustomThemeProvider>
   </UserProvider>
  </BrowserRouter>
 );
}

export default App;
