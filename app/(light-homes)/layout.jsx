import ModalWrapperClassToggler from "@/components/common/ModalWrapperClassToggler";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <ModalWrapperClassToggler classes={["tmp-white-version"]} />
      {children}
    </>
  );
}
