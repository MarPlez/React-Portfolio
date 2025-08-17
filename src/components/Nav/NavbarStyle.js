import styled from "styled-components";
import githubIcon from '../img/github.png';
import githubHoverIcon from '../img/githubhover.png';

export const Logo = styled.div`
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  position: absolute;
  left: 10px;
`;

export const Nav = styled.nav`
  width: 100vw;
  background-color: #ece8e0;
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
`;

export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 70px;
`;

export const MenuItem = styled.li`
  display: inline-block;
  width: 90px;
  position: relative;
  transition: all 0.3s ease-in-out;

  &:hover > a {
    color: #ab5429;
    cursor: pointer;
  }

  &:hover > a::before {
    visibility: visible;
    transform: scale(1, 1);
  }
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

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 3px;
    left: 0px;
    background-color: #ab5429;
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
`;

export const GitHubLogo = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${githubIcon});
  background-size: cover;
  transition: background-image 0.3s ease;

  ${GitHubLink}:hover & {
    background-image: url(${githubHoverIcon});
  }
`;


