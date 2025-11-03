"use client";

import { navItemsDefault } from "@/data/menu";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav2({ navItems = navItemsDefault }) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(
    navItems[0].href.replace("#", "")
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section (only hash links)
    setTimeout(() => {
      navItems.forEach((elm) => {
        if (elm.href.startsWith("#")) {
          const element = document.querySelector(elm.href);
          if (element) {
            observer.observe(element);
          }
        }
      });
    });
    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [navItems]);

  const handleClick = (e, href) => {
    // Only handle smooth scroll for hash links
    if (href.startsWith("#")) {
      e.preventDefault();
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const isActive = (item) => {
    // For regular links, check if pathname matches
    if (!item.href.startsWith("#")) {
      return pathname === item.href;
    }
    // For hash links, check active section
    return activeSection === item.href.replace("#", "");
  };

  return (
    <>
      {navItems.map((item) => (
        <li
          key={item.id}
          className={isActive(item) ? "current" : ""}
        >
          {item.href.startsWith("#") ? (
            <a onClick={(e) => handleClick(e, item.href)} href={item.href}>
              {item.text}
            </a>
          ) : (
            <Link href={item.href}>
              {item.text}
            </Link>
          )}
        </li>
      ))}
    </>
  );
}
