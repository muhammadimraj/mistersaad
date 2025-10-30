"use client";
import { demos, whiteDemos } from "@/data/menu";
import { closeDemoModal } from "@/utils/toggleDemoModal";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

export default function DemoModal() {
  const modalRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        modalRef.current &&
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        parentRef.current.contains(event.target)
      ) {
        closeDemoModal();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const pathname = usePathname();
  useEffect(() => {
    closeDemoModal();
  }, [pathname]);

  return (
    <div className="demo-modal-area" ref={parentRef}>
      <div className="wrapper">
        <div className="tmp-modal-inner" ref={modalRef}>
          <div className="close-icon">
            <button className="demo-close-btn">
              <span>
                <i
                  className="fa-sharp fa-light fa-xmark"
                  onClick={closeDemoModal}
                />
              </span>
            </button>
          </div>
          <div className="demo-top text-center">
            <h4 className="title">Virtuo</h4>
            <p className="subtitle">
              A personal portfolio website is your digital resume—a place to
              showcase your work, skills, and achievements.
            </p>
          </div>
          <ul
            className="popuptab-area nav nav-tabs"
            id="popuptab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active demo-dark"
                id="demodark-tab"
                data-bs-toggle="tab"
                href="#demodark"
                role="tab"
                aria-controls="demodark"
                aria-selected="true"
                onClick={() => {
                  parentRef.current.classList.remove("active-light");
                  parentRef.current.classList.add("dark-version");
                }}
              >
                Dark Demo
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link demo-light"
                id="demolight-tab"
                data-bs-toggle="tab"
                href="#demolight"
                role="tab"
                aria-controls="demolight"
                aria-selected="false"
                onClick={() => {
                  parentRef.current.classList.add("active-light");
                  parentRef.current.classList.remove("dark-version");
                }}
              >
                Light Demo
              </a>
            </li>
          </ul>
          <div className="tab-content" id="popuptabContent">
            <div
              className="tab-pane show active"
              id="demodark"
              role="tabpanel"
              aria-labelledby="demodark-tab"
            >
              <div className="content">
                <div className="row">
                  {/* Start Single Content  */}
                  {demos.map((demo) => (
                    <div className="col-lg-4 col-md-6 col-12" key={demo.id}>
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link href={demo.href}>
                              <img
                                className="w-100"
                                alt="Personal Portfolio"
                                src={demo.img}
                                width={demo.width}
                                height={demo.height}
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link href={demo.href}>{demo.title}</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End Single Content  */}
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="demolight"
              role="tabpanel"
              aria-labelledby="demolight-tab"
            >
              <div className="content">
                <div className="row">
                  {whiteDemos.map((demo) => (
                    <div className="col-lg-4 col-md-6 col-12" key={demo.id}>
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link href={demo.href}>
                              <img
                                className="w-100"
                                alt="Personal Portfolio"
                                src={demo.img}
                                width={demo.width}
                                height={demo.height}
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link href={demo.href}>{demo.title}</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* End Single Content  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
