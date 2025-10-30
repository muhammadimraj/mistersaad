"use client";
import React, { useEffect } from "react";

export default function ModalWrapperClassToggler({ classes = [] }) {
  useEffect(() => {
    const modalWrapper = document.querySelector(".modals-wrapper");
    classes.forEach((className) => {
      modalWrapper.classList.add(className);
    });

    return () => {
      classes.forEach((className) => {
        modalWrapper.classList.remove(className);
      });
    };
  }, []);

  return <></>;
}
