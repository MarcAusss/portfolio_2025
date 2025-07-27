"use client";
import { useEffect, useState, useRef } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  const lastScrollY = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Contact"];

  return (
    <nav
      className={`
        fixed w-full top-0 z-10 text-white p-4 transition-all duration-500 transform
        ${scrolled ? "bg-black" : "bg-black/40"}
        ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex justify-between items-center px-5 md:px-20">
        <div>
          <img
            src="images/Vector 16.png"
            alt=""
            className={`w-10 navbar-logo${show ? " navbar-logo-animate" : ""}`}
            style={{ animationDelay: `0.1s` }}
          />
        </div>
        <ul className="hidden md:flex space-x-6">
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
