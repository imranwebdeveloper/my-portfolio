import React from "react";
import styled from "styled-components";

const OverlayModal = ({ isOpen, handler }) => {
  return isOpen ? <Overlay onClick={handler} /> : null;
};

export default OverlayModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  z-index: 10;
  overflow: hidden;
`;
