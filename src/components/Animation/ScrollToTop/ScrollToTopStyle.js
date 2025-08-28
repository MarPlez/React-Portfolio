import styled from "styled-components";

export const TopToBtn = styled.div`
  position: relative;
`;

export const IconPosition = styled.div`
  position: fixed;
  bottom: 30px;
  right: 25px;
  z-index: 20;

  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateX(${(p) => (p.$visible ? "0" : "50px")});
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
`;

export const IconStyle = styled.button`
  position: relative;
  border: none;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;

  background: linear-gradient(
    to top,
    #000 ${(p) => p.$progress || 0}%,
    #d08300 ${(p) => p.$progress || 0}%
  );

  transition: background 0.2s linear, color 180ms ease;

  &:hover {
    background: #fff;
    color: #d08300;
    border: 2px solid #d08300;
  }
`;
