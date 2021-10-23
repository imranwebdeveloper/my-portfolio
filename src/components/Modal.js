import React from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import MobileMenu from "./UI/MobileMenu";
import OverlayModal from "./UI/Overlay";

export const Modal = () => {
  const itemNameHide = useSelector((state) => state.sidebar.mobileToggle);
  const dispatch = useDispatch();

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
