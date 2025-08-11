// Footer.styled.js
import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: absolute;
  display: flex;
  width: 100%;
  height: 350px;
  overflow: hidden;
`;

export const Background = styled.div`
background-color: #f2f0eb;  
position: absolute;
z-index: -1;
right: 0;
bottom: 0;
left: 0;
transform: none;
width: 100%;
height: 400px;
`;

export const StyledSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(3) scaleX(2.25);
  transform-origin: bottom;
  box-sizing: border-box;
  display: block;
  pointer-events: none;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: white;
  gap: 30px;
  width: 100%;
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
  text-decoration: none;
  padding: 0;
  margin: 0;
  gap: 10px;

  a {
    text-decoration: none;
    color: inherit; 
  }
`;


export const Legal = styled.p`
  font-size: 12px;
  margin: 0;
  padding-bottom: 20px;
`;
