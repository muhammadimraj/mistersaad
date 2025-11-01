"use client";
import { misterSaadTestimonials } from "@/data/testimonials";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function TestimonialsMisterSaad() {
  const swiperRef = useRef(null);

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
            ref={swiperRef}
            className="swiper testimonial-swiper"
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {misterSaadTestimonials.map((testimonial, i) => (
              <SwiperSlide className="swiper-slide" key={i} style={{ height: 'auto' }}>
                <div className="testimonial-inner-style-two single-animation tmponhover" style={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  minHeight: '380px'
                }}>
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
                  <div className="testimonial-body" style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }}>
                    <p className="discription" style={{ 
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      lineHeight: '1.6',
                    }}>
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="tmp-light light-left" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-btn-next-prev" style={{ marginTop: '40px' }}>
            <div 
              className="swiper-button-next" 
              onClick={() => swiperRef.current?.slideNext()}
              style={{ cursor: 'pointer' }}
            >
              <i className="fa-solid fa-arrow-right" />
            </div>
            <div 
              className="swiper-button-prev" 
              onClick={() => swiperRef.current?.slidePrev()}
              style={{ cursor: 'pointer' }}
            >
              <i className="fa-solid fa-arrow-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

