import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function Footer1({
  parentClass = "tmp-footer-area footer-style-4 pt--50 pb--50",
}) {
  return (
    <div className={parentClass}>
      <div className="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="for-animation-inner">
                <div className="cta__line-wrap-1">
                  <img
                    src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                    loading="lazy"
                    alt=""
                    height={118}
                    className="cta__line-1"
                  />
                </div>
                <div className="cta__line-wrap-2">
                  <img
                    className="cta__line-2"
                    src="https://cdn.prod.website-files.com/672799259500d2477d1eafa5/6732fb6df497a3fa7a857752_Vector%207.svg"
                    loading="lazy"
                    alt=""
                    height={118}
                  />
                </div>
                <div className="footer-area w-100">
                  <div
                    className="footer-content-wrapper"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "20px",
                    }}
                  >
                    <div className="logo">
                      <Link href={`/`} style={{ display: "inline-block" }}>
                        <Image
                          className="logo-dark"
                          alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                          src="/assets/saad-images/logo.png"
                          width={108}
                          height={30}
                        />
                        <Image
                          className="logo-white"
                          alt="Virtuo - Personal Portfolio react Nextjs Template for developers and freelancers"
                          src="/assets/saad-images/logo.png"
                          width={108}
                          height={30}
                        />
                      </Link>
                    </div>
                    <p className="description" style={{ margin: 0 }}>
                      © {new Date().getFullYear()} . All rights reserved by{" "}
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/muhammad-saad-b97203206/"
                      >
                        Muhammad Saad.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
