"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { openMobilemenu } from "@/utils/toggleMobilemenu";
export default function HeaderMobile2() {
  return (
    <div className="tmp-responsive-header-style d-block d-xl-none header--sticky">
      <div className="row align-items-center">
        <div className="col-6">
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
        </div>
        <div className="col-6">
          <div className="header-right text-end">
            <div className="tmp-side-collups-area d-flex justify-content-end">
              <button
                onClick={openMobilemenu}
                className="tmp-menu-bars humberger_menu_active"
              >
                <i className="fa-regular fa-bars-staggered" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
