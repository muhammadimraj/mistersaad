"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navItems5 } from "@/data/menu";

export default function SidebarNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState(
    navItems5[0].href.replace("#", "")
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
      navItems5.forEach((elm) => {
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
  }, [navItems5]);

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
    <div className="d-none d-xl-block header-style-2">
      <header className="tmp-header-area d-flex align-items-start flex-column header-left-sticky">
        <div className="inner-wrapper">
          <div className="logo-area">
            <Link href={`/`}>
              <Image
                alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/logo/banner-user-image-04.png"
                width={525}
                height={525}
              />
            </Link>
          </div>
          <nav
            id="sideNavs"
            className="mainmenu-nav navbar-example2 onepagenav"
          >
            <ul className="primary-menu nav nav-pills">
              {navItems5.map((item, index) => (
                <li
                  key={item.text}
                  className={
                    isActive(item)
                      ? "nav-item current"
                      : "nav-item"
                  }
                >
                  {item.href.startsWith("#") ? (
                    <a
                      className="nav-link smoth-animation"
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`feather feather-${item.text.toLowerCase()}`}
                      >
                        {item.icon}
                      </svg>
                      {item.text}
                    </a>
                  ) : (
                    <Link href={item.href} className="nav-link smoth-animation">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`feather feather-${item.text.toLowerCase()}`}
                      >
                        {item.icon}
                      </svg>
                      {item.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer">
            <div className="social-share-style-1">
              <span className="title">Find With Me</span>
              <div className="social-link">
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
