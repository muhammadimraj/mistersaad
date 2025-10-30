"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";
import { openMobilemenu } from "@/utils/toggleMobilemenu";
import { navItemsDefault } from "@/data/menu";

export default function Header1({ navItems = navItemsDefault }) {
  return (
    <>
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        {/* header mid area start */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      className="logo-dark"
                      alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                      src="/assets/saad-images/logo.png"
                      width={200}
                      height={30}
                    />
                    <Image
                      className="logo-white"
                      alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                      src="/assets/saad-images/logo.png"
                      width={200}
                      height={30}
                    />
                  </Link>
                </div>
                <div className="tmp-mainmenu-nav d-none d-xl-block">
                  <nav className="navbar-example2 onepagenav">
                    <ul className="tmp-mainmenu nav nav-pills">
                      <Nav navItems={navItems} />
                    </ul>
                  </nav>
                </div>
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
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="hamberger-menu humberger_menu_active"
                      onClick={openMobilemenu}
                    >
                      <i
                        id="menuBtn"
                        className="fa-light fa-bars humberger-menu"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* header mid area end */}
      </header>
    </>
  );
}
