import styled from "styled-components";

export const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isHovering }) => (isHovering ? "50px" : "30px")};
  height: ${({ isHovering }) => (isHovering ? "50px" : "30px")};
  margin-left: ${({ isHovering }) => (isHovering ? "-25px" : "-15px")};
  margin-top: ${({ isHovering }) => (isHovering ? "-25px" : "-15px")};
  border-radius: 50%;
  background-color: ${({ isHovering }) =>
    isHovering ? "rgba(208, 131, 0, 0.3)" : "transparent"};
  border: ${({ isHovering }) =>
    isHovering ? "1px solid transparent" : "1px solid #cf8536"};
  pointer-events: none;
  transition: width 0.25s ease, height 0.25s ease,
    margin 0.25s ease, background-color 0.25s ease, border 0.25s ease;
  z-index: 9999;
`;
