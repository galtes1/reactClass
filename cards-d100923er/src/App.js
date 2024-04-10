import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import CustomLayout from "./layout/CustomLayout";
import UserProvider from "./users/providers/UserProvider";

function App() {
 return (
  <BrowserRouter>
   <UserProvider>
    <CustomLayout>
     <Router />;
    </CustomLayout>
   </UserProvider>
  </BrowserRouter>
 );
}

export default App;
