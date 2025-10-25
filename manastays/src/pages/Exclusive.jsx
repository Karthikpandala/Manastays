// src/pages/Exclusive.jsx
import React from "react";
import Explore from "./Explore.jsx";
import { properties } from "../data/properties.js";

// Quick wrapper that pre-filters to exclusive in Explore would require prop rejig;
// simplest: reuse Explore and let Recommended sort bubble exclusives. Or:
export default function Exclusive() {
  // We can pre-limit window.location search with a term, but easiest for now:
  // show Explore; user can search/sort; your “Exclusive” nav is still a distinct page.
  return <Explore />;
}
