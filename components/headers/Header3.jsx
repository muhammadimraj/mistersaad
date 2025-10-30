"use client";
import React from "react";
import Image from "next/image";
import Nav2 from "./Nav2";
import Link from "next/link";
import { openSidebar } from "@/utils/toggleSidebar";
import { openMobilemenu } from "@/utils/toggleMobilemenu";
import { navItemsDefault } from "@/data/menu";
export default function Header3({ navItems = navItemsDefault }) {
  return (
    <header className="header-full-width header--sticky">
      <div className="container-fluid-13">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-fluid-main-wrapper">
              <div className="left-area">
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
              </div>
              <div className="right-area">
                {/* <Link href={`/contact`} class="tmp-btn btn-primary">Contact Me</a> */}
                <a className="tmp-btn btn-border tmp-modern-button" href="#">
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">Contact Me</span>
                    <div className="btn-hack" />
                    <Image
                      alt=""
                      className="btn-bg"
                      src="/assets/images/button/btg-bg.svg"
                      width={195}
                      height={56}
                    />
                    <Image
                      alt=""
                      className="btn-bg-hover"
                      src="/assets/images/button/btg-bg-2.svg"
                      width={193}
                      height={62}
                    />
                  </div>
                </a>
                <div className="actions-area tmp-modern-button">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      onClick={openSidebar}
                      className="tmp-menu-bars tmp_button_active"
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div
                    onClick={openMobilemenu}
                    className="tmp-side-collups-area d-block d-xl-none"
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
