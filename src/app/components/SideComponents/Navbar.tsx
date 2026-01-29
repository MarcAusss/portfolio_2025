"use client";
import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react"; // optional icon lib (Lucide)

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);

      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Projects", "About", "Contact"];

  // Smooth scroll function
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <nav
      className={`
        fixed w-full top-0 z-50 text-white p-4 transition-all duration-500 transform
        ${scrolled ? "bg-black" : "bg-black/40"}
        ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="flex justify-between items-center px-5 md:px-20">
        {/* Logo */}
        <div>
          <img
            src="images/Vector 16.png"
            alt="Logo"
            className={`w-10 navbar-logo${show ? " navbar-logo-animate" : ""}`}
            style={{ animationDelay: `0.1s` }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, i) => (
            <li
              key={item}
              className={`navbar-item${show ? " navbar-item-animate" : ""} cursor-pointer`}
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => handleScrollToSection(item)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full h-screen bg-black transition-transform duration-500 flex flex-col items-center justify-center space-y-10 text-3xl ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navItems.map((item, i) => (
          <div
            key={item}
            className={`navbar-item${show ? " navbar-item-animate" : ""} cursor-pointer`}
            style={{ animationDelay: `${i * 0.1}s` }}
            onClick={() => handleScrollToSection(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
}
