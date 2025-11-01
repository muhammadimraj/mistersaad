"use client";
import { useContent } from "@/contexts/ContentContext";
import Link from "next/link";
import React from "react";

export default function PortfolioModal() {
  const { currentPortfolio } = useContent();
  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fa-solid fa-xmark" />
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="portfolio-popup-thumbnail">
                  <div className="image">
                    <img
                      className="w-100"
                      alt="slide"
                      src={currentPortfolio.image}
                      width={1010}
                      height={756}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-content">
                  <h3>{currentPortfolio.title}</h3>
                  <p className="mb--30">
                    {currentPortfolio.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi."}
                  </p>
                  <div className="button-group button-group-pd mt--20">
                    <a
                      className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">LIKE THIS</span>
                        <div className="btn-hack" />
                        <img
                          alt=""
                          className="btn-bg"
                          src="assets/images/button/btg-bg.svg"
                          width={195}
                          height={56}
                        />
                        <img
                          alt=""
                          className="btn-bg-hover"
                          src="assets/images/button/btg-bg-2.svg"
                          width={193}
                          height={62}
                        />
                        <span className="btn-icon">
                          <i className="fa-solid fa-thumbs-up" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-solid fa-thumbs-up" />
                        </span>
                      </div>
                    </a>
                    <Link
                      href={`/project/${currentPortfolio.id}`}
                      className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                      data-bs-dismiss="modal"
                    >
                      <div className="icon-reverse-wrapper">
                        <span className="btn-text">VIEW PROJECT</span>
                        <div className="btn-hack" />
                        <img
                          alt=""
                          className="btn-bg"
                          src="assets/images/button/btg-bg.svg"
                          width={195}
                          height={56}
                        />
                        <img
                          alt=""
                          className="btn-bg-hover"
                          src="assets/images/button/btg-bg-2.svg"
                          width={193}
                          height={62}
                        />
                        <span className="btn-icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-regular fa-chevron-right" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* End of .text-content */}
              </div>
            </div>
            {/* End of .row Body*/}
          </div>
        </div>
      </div>
    </div>
  );
}
