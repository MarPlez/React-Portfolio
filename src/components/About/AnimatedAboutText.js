import React from "react";
import {
  TextChanger,
  IntroText,
  RolesContainer,
  RolesInner,
  Role
} from './AnimatedAboutTextStyle';

const ChangingText = () => {
  return (
    <TextChanger>
     <IntroText></IntroText> 
     <RolesContainer>
        <RolesInner>
          <Role>Frontend Developer</Role>
          <Role>Photographer</Role>
          <Role>Creative Thinker</Role>
          <Role>Visual Storyteller</Role>
          <Role>Frontend Developer</Role>
        </RolesInner>
     </RolesContainer>
    </TextChanger>  
  );
};

export default ChangingText;


