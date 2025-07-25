"use client";
import { useEffect } from "react";

export default function ParametricGallery() {
  useEffect(() => {
    // Paste your entire script code here, but remove the top-level block `{ ... }`
    // and move everything inside useEffect.
    // For example:
    // import * as c from "three";
    // ...rest of your code...
    // Make sure to use window.c if you import three via importmap.
    // Or use dynamic import: import("three").then(c => { ... });
    // Also, ensure your HTML contains <canvas id="c"></canvas> and <div id="gallery"></div>
  }, []);

  return (
    <>
      <canvas id="c" style={{ width: "100vw", height: "100vh" }} />
      <div id="gallery"></div>
    </>
  );
}