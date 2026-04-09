import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative; /* Zmiana z absolute na relative, by footer był pod treścią */
  display: flex;
  width: 100%;
  height: 400px;
  /* overflow: hidden jest kluczowe, aby przeskalowane fale nie rozpychały strony */
  overflow: hidden; 
  background-color: #F9F9F7;
`;

export const Background = styled.div`
  position: absolute;
  z-index: 1; /* Musi być dodatni, ale mniejszy niż treść (Section) */
  inset: 0; /* Skrót dla top, right, bottom, left: 0 */
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export const StyledSVG = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Skalowanie fal - scaleX(2.25) rozpychało stronę, overflow: hidden w kontenerze to naprawia */
  transform: scaleY(3) scaleX(2.25);
  transform-origin: bottom;
  display: block;
  pointer-events: none;

  @media (max-width: 768px) {
    /* Na telefonach nieco mniejsze skalowanie, by fale nie były zbyt "ostre" */
    transform: scaleY(2) scaleX(1.8);
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  gap: 30px;
  width: 100%;
  z-index: 10; /* Treść musi być nad falami */
  padding-bottom: 20px;
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px; /* Nieco większy odstęp, łatwiejszy do kliknięcia na telefonie */

  @media (max-width: 480px) {
    gap: 15px;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: white;
    transition: color 0.2s ease;
  }

  a:hover {
    color: black;
  }
`;

export const Legal = styled.p`
  font-size: 12px;
  margin: 0;
  padding-bottom: 20px;
  opacity: 0.8;
`;