import React from "react";
import Home from "./pages/Home.jsx";
import ListProperty from "./pages/ListProperty.jsx";
import Explore from "./pages/Explore.jsx";

const getPage = () => new URLSearchParams(window.location.search).get("page") || "home";

export default function App() {
  const page = getPage();

  if (page === "list") return <ListProperty />;
  if (page === "explore") return <Explore />;
  return <Home />;
}
