"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';



function Header() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme ==="dark") {
     document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },  [theme]);

  const handleThemeSwitch = () => {
  setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <header className="p-5 flex justify-between  sticky top-0 bg-gray-300 z-50 shadow-md">
      <div className="flex space-x-2 items-center pr-2">
        <Image
          src="/logo.jpg"
          alt="logo"
          height={50}
          width={50}
        />
        <div className="pl-8 flex-col">
          <h1 className="font-bold lg:text-2xl sm:text-lg xs:text-xs">
             <span className="text-blue-500">AI</span> Image
            Generator built by Diana Zawislak
          </h1>
          <h2 className="text-xs">Powered by DALL·E 2 & Chat GPT & Azure</h2>
        </div>
      </div>

      <div className="space-x-2 flex-shrink">
      <SocialIcon  fgColor="lightgrey" bgColor="gray" url="https://www.linkedin.com/in/dianazawislak1980/" />
      <SocialIcon  fgColor="lightgrey" bgColor="gray" url="https://github.com/DianaZawislak" />
      </div>
      </header>
  );
}
export default Header;
