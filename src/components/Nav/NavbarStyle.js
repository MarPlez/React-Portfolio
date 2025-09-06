import styled, { keyframes, css } from "styled-components";
import githubIcon from '../img/github.png';
import githubHoverIcon from '../img/githubhover.png';

const itemAppear = keyframes`
  0%   { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1;  transform: translateX(0); }
`;

export const Logo = styled.div`
  font-size: 22px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  position: absolute;
  left: 0px;

  @media (max-width: 1400px) {
    left: 50px;
  }

  @media (max-width: 768px) {
  font-size: 20px;
  }
`;

export const Nav = styled.nav`
  width: 100vw;
  background-color: #FFFFFF;
  border-bottom: 1px solid rgba(197, 118, 33);
  top: 0;
  position: fixed;
  z-index: 999;
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 70px;
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  display: inline-block;
  width: 100px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover > a { color: #a85700; cursor: pointer; }
  &:hover > a::before { visibility: visible; transform: scale(1, 1); }
`;

export const MenuLink = styled.a`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 7px;
  text-decoration: none;
  position: relative;
  height: 100%;
  cursor: pointer;
  height: 70px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 5px;
    left: 0px;
    background-color: #d08300;
    transition: all 0.2s ease-in-out;
    transform: scale(0, 0);
    visibility: hidden;
  }
`;

export const GitHubLink = styled.a`
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 1400px) {
  right: 50px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const GitHubLogo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${githubIcon});
  background-size: cover;
  transition: background-image 0.3s ease;

  ${GitHubLink}:hover & { background-image: url(${githubHoverIcon}); }
`;


export const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
    z-index: 1001;
    position: absolute;
    right: 30px;

    span {
      width: 24px;
      height: 2px;
      background: #000;
      border-radius: 2px;
      display: block;
      transition: transform 0.5s ease, opacity 0.5s ease, width 0.5s ease;
    }

    &[data-open="true"] span:nth-child(1) {
    transform: translate(4px, 7px) rotate(45deg);
    }
    &[data-open="true"] span:nth-child(2) {
    opacity: 0;
    width: 0;
    }
    &[data-open="true"] span:nth-child(3) {
    transform: translate(4px, -7px) rotate(-45deg);
    }
  }
`;

export const Backdrop = styled.div`
  @media (max-width: 900px) {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 998;
    transition: opacity 0.2s ease;
    
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    pointer-events: ${({ $open }) => ($open ? 'auto' : 'none')};
  }
`;


export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    height: 100dvh;
    width: min(75vw, 40%);
    background: #fff;
    border-left: 1px solid rgba(197, 118, 33);
    transform: translateX(${props => (props.$open ? '0%' : '100%')});
    transition: transform .25s ease;
    z-index: 999;

    nav { height: 100% }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 12px;
      height: 100%;
    }
  }
`;

export const MobileMenuItem = styled.li`
  @media (max-width: 900px) {
    display: block;
  }
`;

export const MobileMenuLink = styled.a`
  @media (max-width: 900px) {
    display: block;
    padding: 8px;
    color: #000;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    position: relative;
    transition: color .2s ease;
   
    opacity: 0;
    transform: translateX(-20px);
    
    ${({ $open }) =>
      $open &&
      css`
        animation: ${itemAppear} 0.5s ease both;
      `}


  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 5px;
    left: 0;
    background-color: #d08300;
    transition: all 0.2s ease-in-out;
    transform: scale(0, 0);
    visibility: hidden;
  }

  &:hover { 
  color: #a85700; 
  cursor: pointer; 
  }

  &:hover::before { 
  visibility: visible; 
  transform: scale(1, 1); 
  }
`;
