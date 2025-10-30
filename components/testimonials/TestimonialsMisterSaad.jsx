"use client";
import { misterSaadTestimonials } from "@/data/testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function TestimonialsMisterSaad() {
  return (
    <section className="testimonial tmp-section-gap">
      <div className="testimonial-wrapper animation-action-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head text-center mb--50">
                <div className="section-sub-title center-title">
                  <span className="subtitle theme-gradient">Client Feedback</span>
                </div>
                <h2 className="title split-collab">Trusted from our clients</h2>
              </div>
            </div>
          </div>
          <Swiper
            className="swiper testimonial-swiper"
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              800: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
          >
            {misterSaadTestimonials.map((testimonial, i) => (
              <SwiperSlide className="swiper-slide" key={i}>
                <div className="testimonial-inner-style-two single-animation tmponhover">
                  <div className="testimonial-header">
                    <div className="thumbnail">
                      <Image
                        alt="client-image"
                        src={testimonial.image}
                        width={400}
                        height={400}
                      />
                    </div>
                    <h5 className="ts-header">
                      <span className="text-color-primary">
                        {testimonial.name}
                      </span>{" "}
                      {testimonial.role}
                    </h5>
                  </div>
                  <div className="testimonial-body">
                    <p className="discription">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="tmp-light light-left" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-btn-next-prev">
            <div className="swiper-button-next">
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div className="swiper-button-prev">
              <i className="fa-solid fa-arrow-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

