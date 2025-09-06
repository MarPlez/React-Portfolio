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
  top: 17%;   
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 40; 

  @media (max-width: 1200px) {
  left: 5%;
  top: 14%;
  }

  @media (max-width: 768px) {
  left: 9%;
  }
`;

export const Title = styled.h2`
  font-size: clamp(30px, 5vw, 48px);
  margin: 0;
  color: #d08300;
  line-height: 0.4;
`;

export const WelcomeText = styled.p`
  font-size: clamp(10px, 1.8vw, 16px);
  color: #8a7d72;
  font-family: 'Poppins', sans-serif;
  border-bottom: 1px solid #d08300;
  line-height: 1;

  @media (max-width: 768px) {
  display: none;
  }
`;

export const TextLeft = styled.div`
  position: absolute;
  left: clamp(15px, 12%, 160px);
  top: 50%;
  transform: translateY(-50%);
  font-size: clamp(18px, 3.7vw, 36px);
  font-weight: bold;
  color: #a85700;
  z-index: 30;
  opacity: ${(p) => 0.05 + ((100 - p.position) / 50) * 0.95};
  transition: opacity 0.2s ease-out;
`;

export const TextRight = styled.div`
  position: absolute;
  right: clamp(10px, 12%, 24px);
  top: 38%;
  font-size: clamp(18px, 3.7vw, 36px);
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
  inset: auto auto auto 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  object-fit: contain;       
  display: block;
  bottom: 0;

@media (max-width: 1000px) {
width: 95%;
height: 95%;
}
`;

export const OverlayImage = styled(Image)`
  clip-path: ${(p) => `inset(0 ${100 - p.position}% 0 0)`};
  transition: clip-path 0.1s ease-out;
  will-change: clip-path;
`;

export const BannerLeft = styled.img`
  position: absolute;
  width: 35%;                
  height: auto;
  display: block;
  z-index: 10;                 
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;  
  left: -10px;
  bottom: 0px;
  opacity: ${({ position }) =>
    0.15 + 0.85 * Math.max(0, Math.min(1, (50 - position) / 30))};

  @media (max-width: 1000px) {
  width: 30%;
  left: 10px;
  }
  
`;

export const BannerRight = styled.img`
  position: absolute;
  width: 37%;                
  height: auto;
  display: block;
  z-index: 10;                 
  transition: opacity 0.2s ease-out, transform 0.2s ease-out;  
  right: -40px;
  bottom: 0px;
  opacity: ${({ position }) =>
    0.15 + 0.85 * Math.max(0, Math.min(1, (position - 50) / 30))};
  
  @media (max-width: 1000px) {
  right: 0px;
  width: 33%;
  bottom: 15px;
  }

  @media (max-width:768px) {
  right: 10px;
  bottom: 10px;
  width: 30%;
  }
`;



