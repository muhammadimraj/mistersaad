import React from "react";

export default function RightSidebarNav() {
  return (
    <>
      <>
        <ul
          className="tab-navigation-button nav tab-smlg flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link tmp-nav active"
              id="v-pills-home-tab"
              data-bs-toggle="tab"
              href="#v-pills-Javascript"
              role="tab"
              aria-selected="true"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-profile-tab"
              data-bs-toggle="tab"
              href="#v-pills-Design"
              role="tab"
              aria-selected="true"
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-wordpress-tab"
              data-bs-toggle="tab"
              href="#v-pills-Wordpress"
              role="tab"
              aria-selected="true"
            >
              Work
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-settings-tabs"
              data-bs-toggle="tab"
              href="#v-pills-settings"
              role="tab"
              aria-selected="true"
            >
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link tmp-nav"
              id="v-pills-python-tabs"
              data-bs-toggle="tab"
              href="#v-pills-python"
              role="tab"
              aria-selected="true"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="animation-round-wrap">
          <div className="round-animation-1" />
        </div>
      </>
    </>
  );
}
