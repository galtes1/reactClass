import React from "react";
import { Routes, Route } from "react-router-dom";
import ROUTES from "./routesModel";
import CustomCardsPage from "../cards/pages/CustomCardsPage";
import CustomAboutPage from "../pages/CustomAboutPage";
import CustomErrorPage from "../pages/CustomErrorPage";
import CustomCardDetailsPage from "../cards/pages/CustomCardDetailsPage";
import CustomSandBoxPage from "../sandbox/CustomSandBoxPage";
import CustomCounterPage from "../sandbox/sandboxPages/CustomCounterPage";
import CustomLifeCycle from "../sandbox/sandboxPages/CustomLifeCycle";
import CustomCountries from "../sandbox/sandboxPages/CustomCountries";
import CustomSpinner from "../components/CustomSpinner";
import CustomFormExample from "../sandbox/sandboxPages/CustomFormExample";
import CustomFormMain from "../forms/pages/CustomFormMain";
import CustomSignupPage from "../users/pages/CustomSignupPage";
import CustomLoginPage from "../users/pages/CustomLoginPage";
import CustomParentComponent from "../sandbox/optimozation/CustomParentComponent";
import ParentComponentPage from "../sandbox/context/ParentComponentPage";

export default function Router() {
 return (
  <Routes>
   <Route path={ROUTES.ROOT} element={<CustomCardsPage />} />
   <Route path={ROUTES.CARDS} element={<CustomCardsPage />} />
   <Route path={ROUTES.ABOUT} element={<CustomAboutPage />} />
   <Route path={ROUTES.LOGIN} element={<CustomLoginPage />} />
   <Route path={ROUTES.SIGNUP} element={<CustomSignupPage />} />
   <Route path={ROUTES.FORM} element={<CustomFormMain />}>
    <Route path="logIn" element={<CustomLoginPage />} />
    <Route path="signUp" element={<CustomSignupPage />} />
   </Route>
   <Route
    path={ROUTES.CARD_INFO + "/:id"}
    element={<CustomCardDetailsPage />}
   />
   <Route path={ROUTES.SIGNUP} element={<CustomSignupPage />} />
   <Route path={ROUTES.SANDBOX} element={<CustomSandBoxPage />}>
    <Route path="counter" element={<CustomCounterPage />} />
    <Route path="lifeCycle" element={<CustomLifeCycle />} />
    <Route path="countries" element={<CustomCountries />} />
    <Route path="spinner" element={<CustomSpinner />} />
    <Route path="form" element={<CustomFormExample />} />
    <Route path="optimization" element={<CustomParentComponent />} />
    <Route path="context" element={<ParentComponentPage />} />
   </Route>
   <Route path="*" element={<CustomErrorPage />} />
  </Routes>
 );
}
