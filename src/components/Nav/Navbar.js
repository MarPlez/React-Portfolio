import React from "react";
import {
  Logo,
  NavContainer,
  Nav,
  Menu,
  MenuItem,
  MenuLink,
  GitHubLogo,
  GitHubLink
} from './NavbarStyle';

export default function Navbar() {
  return (
    <Nav>
      <NavContainer>
      <Logo>MARCIN PLEZIA</Logo>
      <Menu>
        <MenuItem>
          <MenuLink href="#home" className="cursor-hover-target">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#about" className="cursor-hover-target">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#myhistory" className="cursor-hover-target">My history</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact" className="cursor-hover-target">Contact</MenuLink>
        </MenuItem>
      </Menu>      
      <GitHubLink href="https://github.com/MarPlez" target="_blank">
      <GitHubLogo className="cursor-hover-target" /></GitHubLink> 
      </NavContainer>
    </Nav>
  );
}
