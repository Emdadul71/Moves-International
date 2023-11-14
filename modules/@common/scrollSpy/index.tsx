"use client";
import React, { useState, useEffect } from "react";

export const ScrollSpy = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section"); // Assuming your content is divided into sections

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="scrollspy-nav sticky top-[150px]">
      <ul>
        <li className={activeSection === "section1" ? "active" : ""}>
          <a href="#section1">Section 1</a>
        </li>
        <li className={activeSection === "section2" ? "active" : ""}>
          <a href="#section2">Section 2</a>
        </li>
        <li className={activeSection === "section3" ? "active" : ""}>
          <a href="#section3">Section 3</a>
        </li>
      </ul>
    </nav>
  );
};

export default ScrollSpy;
