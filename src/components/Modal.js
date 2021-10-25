import React from "react";
import ReactDom from "react-dom";
import MobileMenu from "./UI/MobileMenu";
import OverlayModal from "./UI/Overlay";

export const Modal = () => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <MobileMenu />,
        document.getElementById("mobileMenu-root")
      )}
      {ReactDom.createPortal(
        <OverlayModal />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
