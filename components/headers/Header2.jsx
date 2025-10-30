"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Nav2 from "./Nav2";
import { openSidebar } from "@/utils/toggleSidebar";
import { openMobilemenu } from "@/utils/toggleMobilemenu";
import { navItemsDefault } from "@/data/menu";
export default function Header2({ navItems = navItemsDefault }) {
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
              <div className="logo">
                <Link href={`/`}>
                  <Image
                    className="logo-dark"
                    alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                    src="/assets/images/logo/white-logo-reeni.png"
                    width={108}
                    height={30}
                  />
                  <Image
                    className="logo-white"
                    alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                    src="/assets/images/logo/dark-logo-virtuo.png"
                    width={108}
                    height={30}
                  />
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <ul className="tmp-mainmenu onepagenav">
                  <Nav2 navItems={navItems} />
                </ul>
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
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
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={openSidebar}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div
                    className="tmp-side-collups-area d-block d-xl-none"
                    onClick={openMobilemenu}
                  >
                    <button className="tmp-menu-bars humberger_menu_active">
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
