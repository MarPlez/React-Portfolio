import styled from "styled-components";

export const WrapperIntro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

export const InnerWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 15%;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 40; 
`;

export const Title = styled.h2`
  font-size: 48px;
  margin: 0;
  color: #d08300;
  line-height: 0.4;
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  color: #8a7d72;
  font-family: 'Poppins', sans-serif;
  border-bottom: 1px solid #d08300;
  line-height: 1;
`;

export const TextLeft = styled.div`
  position: absolute;
  left: 150px;
  top: 50%;
  font-size: 36px;
  font-weight: bold;
  color: #a85700;
  z-index: 30;
  opacity: ${(p) => 0.05 + ((100 - p.position) / 50) * 0.95};
  transition: opacity 0.2s ease-out;
`;

export const TextRight = styled.div`
  position: absolute;
  right: 50px;
  top: 33%;
  font-size: 36px;
  font-weight: bold;
  color: #a85700;
  z-index: 30; 
  opacity: ${(p) => 0.05 + (p.position / 50) * 0.95};
  transition: opacity 0.2s ease-out;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;        
  z-index: 20;                 
`;

export const Image = styled.img`
  position: absolute;
  inset: 0 auto auto 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: contain;       
  display: block;
`;

export const OverlayImage = styled(Image)`
  clip-path: ${(p) => `inset(0 ${100 - p.position}% 0 0)`};
  transition: clip-path 0.1s ease-out;
  will-change: clip-path;
`;

export const BannerLeft = styled.img`
position: absolute;
  width: 350px;                
  height: auto;
  display: block;
  z-index: 10;                 
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;  
  left: -20px;
  bottom: 0px;
  opacity: ${({ position }) =>
    0.05 + 0.95 * Math.max(0, Math.min(1, (50 - position) / 50))};
`;

export const BannerRight = styled.img`
position: absolute;
  width: 370px;                
  height: auto;
  display: block;
  z-index: 10;                 
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;  
  right: -30px;
  bottom: 30px;
  opacity: ${({ position }) =>
    0.05 + 0.95 * Math.max(0, Math.min(1, (position - 50) / 50))};
`;



