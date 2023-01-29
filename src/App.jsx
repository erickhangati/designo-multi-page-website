import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import OurCompany from "./pages/OurCompany/OurCompany";
import Locations from "./pages/Locations/Locations";
import Contact from "./pages/Contact/Contact";
import { action as contactAction } from "./pages/Contact/ContactForm/ContactForm";
import Portfolio from "./pages/Portfolio/Portfolio";
import Error from "./pages/Error/Error";

// DEFINING ROUTES
const definedRoutes = createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route index element={<Home />} />
    <Route path="our-company" element={<OurCompany />} />
    <Route path="locations" element={<Locations />} />
    <Route path="contact" element={<Contact />} action={contactAction} />
    <Route path="portfolio" replace element={<Navigate to="/" />} />
    <Route path="portfolio/:slug" element={<Portfolio />} />
  </Route>
);

// SET UP ROUTES FOR THE BROWSER/DOM
const router = createBrowserRouter(definedRoutes);

// ROUTER PROVIDER
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
