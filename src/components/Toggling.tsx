"use client"
import Image from "next/image";
import { useState } from "react";



export function Toggling() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode(){
    const updatedDarkMode = !darkMode;
    if (updatedDarkMode) {
      document.documentElement.dataset.mode = 'dark';
    } else {
      document.documentElement.dataset.mode = 'light';
    }
    
    setDarkMode(updatedDarkMode);
  }
  return (
    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" onClick={toggleDarkMode}>
      { darkMode ? "☀️" : "🌙"}
      </a>
  
  );

}


