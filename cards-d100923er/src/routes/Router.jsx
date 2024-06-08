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
import CustomSignupPage from "../users/pages/CustomSignupPage";
import CustomLoginPage from "../users/pages/CustomLoginPage";
import CustomParentComponent from "../sandbox/optimozation/CustomParentComponent";
import ParentComponentPage from "../sandbox/context/ParentComponentPage";
import CustomAddCardPage from "../cards/pages/CustomAddCardPage";
import CustomEditCardPage from "../cards/pages/CustomEditCardPage";
import CustomProfilePage from "../users/pages/CustomProfilePage";
import FavCardsPage from "../cards/pages/FavCardsPage";

export default function Router() {
 return (
  <Routes>
   <Route path={ROUTES.ROOT} element={<CustomCardsPage />} />
   <Route path={ROUTES.CARDS} element={<CustomCardsPage />} />
   <Route path={ROUTES.ABOUT} element={<CustomAboutPage />} />
   <Route path={ROUTES.LOGIN} element={<CustomLoginPage />} />
   <Route path={ROUTES.SIGNUP} element={<CustomSignupPage />} />
   <Route path={ROUTES.CREATE_CARD} element={<CustomAddCardPage />} />
   <Route path={ROUTES.EDIT_CARD + "/:id"} element={<CustomEditCardPage />} />
   <Route
    path={ROUTES.CARD_INFO + "/:cardId"}
    element={<CustomCardDetailsPage />}
   />
   <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage />} />
   <Route path={ROUTES.USER_PROFILE} element={<CustomProfilePage />} />
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

 //maayan
}
