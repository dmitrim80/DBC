import React from "react";
import './App.css';
import Option1 from "./Option1";
import Option2 from "./Option2";

export default function App() {
    return (
      <div className="container">
          <Option1 /> <Option2 />
          <Option1 /> <Option2 />
      </div>  
    )
}