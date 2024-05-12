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
    <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={toggleDarkMode}> 
        { darkMode ? "bota claro" : "bota escuro"}
    </button>
  );

}


