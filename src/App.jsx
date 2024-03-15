import React from "react";
import Background from "./Background";
import "./App.css";
import Foreground from "./Foreground";

export default function App() {
  return (
    <div className="wrapper">
      <Background />
      <Foreground />
    </div>
  );
}
