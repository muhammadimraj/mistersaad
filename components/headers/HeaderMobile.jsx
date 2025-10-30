"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Nav2 from "./Nav2";
import { closeMobilemenu } from "@/utils/toggleMobilemenu";
import { navItemsDefault } from "@/data/menu";

export default function MobileMenu({ navItems = navItemsDefault }) {
  const menuRef = useRef(null); // .tmp-popup-mobile-menu
  const innerRef = useRef(null); // .inner

  useEffect(() => {
    const handleClick = (event) => {
      if (!menuRef.current || !innerRef.current) return;

      if (menuRef.current.contains(event.target)) {
        console.log("Clicked inside .tmp-popup-mobile-menu");

        if (!innerRef.current.contains(event.target)) {
          closeMobilemenu(); // Optional: close menu
        }
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="d-block d-xl-none">
      <div className="tmp-popup-mobile-menu" ref={menuRef}>
        <div className="inner" ref={innerRef}>
          <div className="header-top">
            <div className="logo">
              <Link href="/" className="logo-area">
                <Image
                  className="logo-dark"
                  alt="Logo dark"
                  src="/assets/images/logo/white-logo-reeni.png"
                  width={108}
                  height={30}
                />
                <Image
                  className="logo-white"
                  alt="Logo white"
                  src="/assets/images/logo/dark-logo-virtuo.png"
                  width={108}
                  height={30}
                />
              </Link>
            </div>
            <div className="close-menu">
              <button
                onClick={closeMobilemenu}
                className="close-button tmp-round-action-btn"
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <ul className="tmp-mainmenu onepagenav" onClick={closeMobilemenu}>
            <Nav2 navItems={navItems} />
          </ul>
          <div className="social-wrapper mt--40">
            <span className="subtitle">find with me</span>
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
    </div>
  );
}
