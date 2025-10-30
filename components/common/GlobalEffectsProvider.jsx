"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function GlobalEffectsProvider() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm").then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        document.querySelector(".header--sticky")?.classList.add("sticky");
      } else {
        document.querySelector(".header--sticky")?.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount
  const pathname = usePathname();
  useEffect(() => {
    // Class names for different scroll and animation states
    const RBT_SCROLL_ACTIVATION = "tmp-scroll-trigger";
    const RBT_SCROLL_OFFSCREEN_ACTIVATION = "tmp-scroll-trigger--offscreen";
    const RBT_SCROLL_ZOOM_IN_ACTIVATION = "animate--zoom-in";
    const RBT_SCROLL_CANCEL_ACTIVATION = "tmp-scroll-trigger--cancel";

    // Handle intersection events for scroll animations
    function onIntersection(entries, observer) {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const elementTarget = entry.target;
          if (
            elementTarget.classList.contains(RBT_SCROLL_OFFSCREEN_ACTIVATION)
          ) {
            elementTarget.classList.remove(RBT_SCROLL_OFFSCREEN_ACTIVATION);
            if (elementTarget.dataset.cascade) {
              elementTarget.style.setProperty("--animation-order", index);
            }
          }
          observer.unobserve(elementTarget);
        } else {
          entry.target.classList.add(RBT_SCROLL_OFFSCREEN_ACTIVATION);
          entry.target.classList.remove(RBT_SCROLL_CANCEL_ACTIVATION);
        }
      });
    }

    // Initialize scroll animation triggers
    function initializeScrollAnimationTrigger(
      rootEl = document,
      isDesignModeEvent = false
    ) {
      const animationTriggerElements = rootEl.querySelectorAll(
        `.${RBT_SCROLL_ACTIVATION}`
      );
      if (animationTriggerElements.length === 0) return;

      if (isDesignModeEvent) {
        animationTriggerElements.forEach((element) => {
          element.classList.add("tmp-scroll-trigger--design-mode");
        });
        return;
      }

      const observer = new IntersectionObserver(onIntersection, {
        rootMargin: "0px 0px -50px 0px",
      });
      animationTriggerElements.forEach((element) => {
        observer.observe(element);
      });
    }

    // Calculate the percentage of the element that is visible
    function percentageSeen(element) {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const elementRect = element.getBoundingClientRect();
      const elementPositionY = elementRect.top + scrollY;
      const elementHeight = elementRect.height;

      if (elementPositionY > scrollY + viewportHeight) return 0;
      if (elementPositionY + elementHeight < scrollY) return 100;

      let percentage =
        (scrollY + viewportHeight - elementPositionY) /
        ((viewportHeight + elementHeight) / 100);
      return Math.round(percentage);
    }

    // Throttle the scroll event to improve performance
    function throttle(fn, wait) {
      let time = Date.now();
      return function () {
        if (time + wait - Date.now() < 0) {
          fn();
          time = Date.now();
        }
      };
    }

    // Initialize zoom-in animation triggers
    function initializeScrollZoomAnimationTrigger() {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const animationTriggerElements = document.querySelectorAll(
        `.${RBT_SCROLL_ZOOM_IN_ACTIVATION}`
      );
      if (animationTriggerElements.length === 0) return;

      const scaleAmount = 0.2 / 100;
      animationTriggerElements.forEach((element) => {
        let elementIsVisible = false;

        new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            elementIsVisible = entry.isIntersecting;
          });
        }).observe(element);

        element.style.setProperty(
          "--zoom-in-ratio",
          1 + scaleAmount * percentageSeen(element)
        );

        const handleScroll = throttle(() => {
          if (elementIsVisible) {
            element.style.setProperty(
              "--zoom-in-ratio",
              1 + scaleAmount * percentageSeen(element)
            );
          }
        }, 100);

        window.addEventListener("scroll", handleScroll, { passive: true });

        // Cleanup function for this element
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      });
    }

    // Initialize animations and remove initial opacity class from swiper slides
    document.querySelectorAll(".swiper-slide.opacity-0").forEach((element) => {
      element.classList.remove("opacity-0");
    });

    initializeScrollAnimationTrigger();
    initializeScrollZoomAnimationTrigger();

    // Cleanup function for the useEffect
    return () => {
      // Cleanup any ongoing observers or event listeners if needed
      // (implementation would depend on how you track the observers)
    };
  }, [pathname]); // Empty dependency array means this runs once on mount

  useEffect(() => {
    const cards = document.querySelectorAll(".tmponhover");
    const handleCardMouseMove = (e) => {
      const tmpOnHover = e.currentTarget;
      const x = e.pageX - tmpOnHover.offsetLeft;
      const y = e.pageY - tmpOnHover.offsetTop;
      tmpOnHover.style.setProperty("--x", x + "px");
      tmpOnHover.style.setProperty("--y", y + "px");
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleCardMouseMove);
    });
    return () => {
      // Cleanup card hover effects
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleCardMouseMove);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const elements = document.querySelectorAll(".paralax-image");
    if (elements.length > 0) {
      elements.forEach((el) => {
        VanillaTilt.init(el, {
          max: 5,
          speed: 1000,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          transition: false,
          perspective: 1000,
          scale: 1,
        });
      });
    }

    return () => {
      document.querySelectorAll(".paralax-image").forEach((el) => {
        if (el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };
  }, [pathname]);
  useEffect(() => {
    // Services Widget Logic
    const servicesWidget = document.querySelector(".services-widget");
    if (servicesWidget) {
      const activeBg = servicesWidget.querySelector(".active-bg");

      function updateActiveService(element) {
        if (!element) return;

        const rect = element.getBoundingClientRect();
        const widgetRect = servicesWidget.getBoundingClientRect();
        const topOff = rect.top - widgetRect.top;
        const height = element.offsetHeight;

        const closestServiceItem = element.closest(".service-item");
        if (closestServiceItem) {
          closestServiceItem.classList.remove("mleave");
        }

        servicesWidget.querySelectorAll(".service-item").forEach((item) => {
          if (closestServiceItem !== item) {
            item.classList.add("mleave");
          }
        });

        if (activeBg) {
          activeBg.style.top = `${topOff}px`;
          activeBg.style.height = `${height}px`;
        }
      }

      function handleMouseEnter(e) {
        const serviceItem = e.target.closest(".service-item");
        if (serviceItem) {
          updateActiveService(serviceItem);
        }
      }

      function handleMouseLeave() {
        const currentElement = servicesWidget.querySelector(".current");
        updateActiveService(currentElement);

        servicesWidget.querySelectorAll(".service-item").forEach((item) => {
          if (!currentElement || !item.contains(currentElement)) {
            item.classList.remove("mleave");
          }
        });
      }

      function handleClick(e) {
        const serviceItem = e.target.closest(".service-item");
        if (serviceItem) {
          servicesWidget.querySelectorAll(".service-item").forEach((item) => {
            item.classList.remove("current");
          });
          serviceItem.classList.add("current");
        }
      }

      servicesWidget.addEventListener("mouseenter", handleMouseEnter, true);
      servicesWidget.addEventListener("mouseleave", handleMouseLeave);
      servicesWidget.addEventListener("click", handleClick);

      // Initial call
      updateActiveService(servicesWidget.querySelector(".current"));

      // Card Hover Effect Logic

      return () => {
        // Cleanup services widget events
        servicesWidget.removeEventListener(
          "mouseenter",
          handleMouseEnter,
          true
        );
        servicesWidget.removeEventListener("mouseleave", handleMouseLeave);
        servicesWidget.removeEventListener("click", handleClick);
      };
    }
  }, [pathname]); // Empty dependency array means this runs once on mount
  useEffect(() => {
    const containers = [
      ".animation-action-1",
      ".animation-action-2",
      ".animation-action-3",
      ".animation-action-4",
      ".animation-action-5",
      ".animation-action-6",
    ];

    const listeners = [];

    containers.forEach((containerSelector) => {
      const container = document.querySelector(containerSelector);
      if (!container) return;
      const items = container.querySelectorAll(".single-animation");

      items.forEach((item) => {
        const handler = () => {
          item.classList.remove("tmp-control");
          setTimeout(() => {
            const active = container.querySelector(".active");
            if (active) {
              active.classList.remove("active");
              active.classList.add("tmp-control");
            }
            item.classList.remove("tmp-control");
            item.classList.add("active");
          }, 0);
        };

        item.addEventListener("mouseenter", handler);
        listeners.push({ item, handler });
      });
    });

    return () => {
      listeners.forEach(({ item, handler }) => {
        item.removeEventListener("mouseenter", handler);
      });
    };
  }, [pathname]);
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.getAttribute("href") === "#") {
        e.preventDefault();
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);
  return <></>;
}
