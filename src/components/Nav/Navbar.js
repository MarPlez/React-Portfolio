import React, { useState, useEffect } from "react";
import {
  Logo,
  NavContainer,
  Nav,
  Menu,
  MenuItem,
  MenuLink,
  GitHubLogo,
  GitHubLink,
  HamburgerButton,
  MobileMenu,
  MobileMenuItem,
  MobileMenuLink,
  Backdrop
} from './NavbarStyle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
 if (open) {

   const sbw = window.innerWidth - document.documentElement.clientWidth;
   document.body.style.overflow = 'hidden';
   document.body.style.paddingRight = sbw ? `${sbw}px` : '';
 } else {
   document.body.style.overflow = '';
   document.body.style.paddingRight = '';
 }
 return () => {
   document.body.style.overflow = '';
   document.body.style.paddingRight = '';
 };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (

    <Nav>
      <NavContainer>
        <Logo>MarcinPlezia</Logo>

        <Menu>
          <MenuItem><MenuLink href="#home" className="cursor-hover-target">Home</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#about" className="cursor-hover-target">About</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#myhistory" className="cursor-hover-target">MyJourney</MenuLink></MenuItem>
          <MenuItem><MenuLink href="#contact" className="cursor-hover-target">Contact</MenuLink></MenuItem>
        </Menu>

        <GitHubLink href="https://github.com/MarPlez" target="_blank" aria-label="GitHub">
          <GitHubLogo className="cursor-hover-target" />
        </GitHubLink>

        <HamburgerButton
          className="cursor-hover-target"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          data-open={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </HamburgerButton>
      </NavContainer>

      <Backdrop $open={open} onClick={closeMenu} />

      <MobileMenu id="mobile-menu" $open={open} onClick={closeMenu}>
        <nav>
          <ul>
            <MobileMenuItem>
             <MobileMenuLink $open={open} style={{ animationDelay: '0.20s' }} className="cursor-hover-target" href="#home">Home</MobileMenuLink>
           </MobileMenuItem>
           <MobileMenuItem>
            <MobileMenuLink $open={open} style={{ animationDelay: '0.35s' }} className="cursor-hover-target" href="#about">About</MobileMenuLink>
           </MobileMenuItem>
           <MobileMenuItem>
            <MobileMenuLink $open={open} style={{ animationDelay: '0.50s' }} className="cursor-hover-target" href="#myhistory">MyJourney</MobileMenuLink>
           </MobileMenuItem>
           <MobileMenuItem>
            <MobileMenuLink $open={open} style={{ animationDelay: '0.65s' }} className="cursor-hover-target" href="#contact">Contact</MobileMenuLink>
           </MobileMenuItem>
          </ul>
        </nav>
      </MobileMenu>
    </Nav>
  );
}
