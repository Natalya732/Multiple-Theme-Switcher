import React, { useEffect, useState } from "react";
import "./App.css";
import "./Switcher.scss";
export default function App() {
  const [colorTheme, setColorTheme] = useState("theme-white");

  //effect
  useEffect(() => {
    const currentThemeColor = localStorage.getItem("theme-color");
    if (currentThemeColor) {
      setColorTheme(currentThemeColor);
    }
  }, []);

  //set theme
  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
  };
  return (
    <div className={`App ${colorTheme}`}>
      <div className="three-options">
        <div
          id="theme-white"
          onClick={() => handleClick("theme-white")}
          className={`${colorTheme === "theme-white" ? "active" : ""}`}
        />
        <div
          id="theme-blue"
          onClick={() => handleClick("theme-blue")}
          className={`${colorTheme === "theme-blue" ? "active" : ""}`}
        />
        <div
          id="theme-orange"
          onClick={() => handleClick("theme-orange")}
          className={`${colorTheme === "theme-orange" ? "active" : ""}`}
        />
        <div
          id="theme-purple"
          onClick={() => handleClick("theme-purple")}
          className={`${colorTheme === "theme-purple" ? "active" : ""}`}
        />
        <div
          id="theme-green"
          onClick={() => handleClick("theme-green")}
          className={`${colorTheme === "theme-green" ? "active" : ""}`}
        />
        <div
          id="theme-dark"
          onClick={() => handleClick("theme-dark")}
          className={`${colorTheme === "theme-dark" ? "active" : ""}`}
        />
      </div>

      <div className="content-box">
        <h3>Multiple theme switcher/React</h3>
        <h5>ReactjS , SCSS, LOCAL STORAGE</h5>
        <p>
          Parascript Smart Learning advanced capture software processes more
          documents faster, using fewer people with less errors. The system
          automatically configures rules and learns by itself in order to
          improve performance. Increase ROI with document automation Smart
          Learning software requires no specialized skills Adapts to new
          documents and changes on-the-fly Unstructured Handwriting Extraction
          Automatically locates handwritten keywords Integrated Check
          Recognition Process checks within a stream of documents High
          Performance, Extendable API Automatically configures rules and learns
          to improve performance Dynamic Signature Matching Locates, verifies &
          matches signatures Integrated Address Recognition Inbound mail and
          document automation Pre-Defined Form Modules Rapid and easy deployment
        </p>
      </div>
    </div>
  );
}
