import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import CustomLayout from "./layout/CustomLayout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import AlertProvider from "./providers/AlertProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
          <AlertProvider>
            <CustomThemeProvider>
              <CustomLayout>
                <Router />;
              </CustomLayout>
            </CustomThemeProvider>
          </AlertProvider>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
//

export default App;
