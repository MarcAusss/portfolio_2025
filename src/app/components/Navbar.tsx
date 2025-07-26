"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    const timeout = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Contact"];

  return (
    <nav className={`fixed w-full top-0 z-10 text-white p-4 transition-colors duration-300 ${ scrolled ? "bg-black" : "bg-black/40"}`}>
        <div className="flex justify-between items-center px-20">
            <div className="">
                <img src="images/Vector 16.png" alt="" className={`w-10 navbar-logo${show ? "navbar-logo-animate" : ""}`}  style={{ animationDelay: `0.1s`,}}/>
            </div>
            <ul className="flex space-x-4">
                {navItems.map((item, i) => (
                <li
                    key={item}
                    className={`navbar-item${show ? " navbar-item-animate" : ""}`}
                    style={{
                    animationDelay: `${i * 0.1 + 0}s`,
                    }}
                >
                    {item}
                </li>
                ))}
            </ul>
        </div>
        
    </nav>
  );
}