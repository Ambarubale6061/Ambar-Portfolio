"use client";

import React, { useEffect, useRef } from "react";

export default function SplineScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. External element dynamic injection configuration
    const initializeViewer = () => {
      if (
        containerRef.current &&
        !containerRef.current.querySelector("spline-viewer")
      ) {
        const viewer = document.createElement("spline-viewer");
        viewer.setAttribute(
          "url",
          "https://prod.spline.design/Is7NqX92P2CByXfC/scene.splinecode",
        );
        viewer.setAttribute("loading-sidebar", "hidden");
        containerRef.current.appendChild(viewer);
      }
    };

    // 2. Head layout configuration
    const existingScript = document.querySelector(
      'script[src*="spline-viewer"]',
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.9.5/build/spline-viewer.js";
      script.type = "module";
      script.async = true;

      // Load event manages execution safely to avoid synchronous runtime stream races
      script.onload = initializeViewer;
      document.head.appendChild(script);
    } else {
      // Script already parsed, build component nodes immediately
      initializeViewer();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full scale-110 pointer-events-auto mix-blend-darken"
      style={{ transform: "translateZ(35px)" }}
    />
  );
}
