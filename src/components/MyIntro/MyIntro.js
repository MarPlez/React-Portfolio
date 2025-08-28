import React, { useState } from "react";
import imageBefore from '../img/imagebefore.png';
import imageAfter from '../img/imageafter.png';
import banerRight from '../img/baner_right.png';
import banerLeft from '../img/baner_left.png';
import { 
  WrapperIntro, 
  InnerWrapper, 
  TextLeft, 
  TextRight,
  Container, 
  Image, 
  OverlayImage, 
  TitleWrapper,
  Title,
  WelcomeText,
  BannerLeft,
  BannerRight,
} from './MyIntroStyles';


export default function SplitImageSlider() {
  const [position, setPosition] = useState(50); 

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(percent);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = Math.min(100, Math.max(0, (x / rect.width) * 100));
      setPosition(percent);
    }
  };

   return (
<WrapperIntro>
  <InnerWrapper>
    <TitleWrapper>
      <Title>Hello.</Title>
      <WelcomeText>WELCOME TO MY PAGE</WelcomeText>
    </TitleWrapper>

    <TextLeft position={position}>Photographer</TextLeft>
    <BannerLeft src={banerLeft} position={position} />
    
    <Container onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <Image src={imageBefore} alt="Before" />
      <OverlayImage src={imageAfter} alt="After" position={position} />
    </Container>
    
    <TextRight position={position}>Frontend Developer</TextRight>
    <BannerRight src={banerRight} position={position} />
  </InnerWrapper>
</WrapperIntro>
  );
}
