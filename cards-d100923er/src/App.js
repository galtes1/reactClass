import "./App.css";

import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import CustomLayout from "./layout/CustomLayout";

function App() {
  return (
    <BrowserRouter>
      <CustomLayout>
        <Router />;
      </CustomLayout>
    </BrowserRouter>
  );
}

export default App;
