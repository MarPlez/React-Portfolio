import React from "react";
import ChangingText from './AnimatedAboutText';
import { 
  AboutDiv, 
  Title, 
  Name, 
  AboutText, 
  AboutLeft, 
  AboutRight, 
  AboutHeading } from './AboutStyle';

export default function About() {
  return (
    <AboutDiv>
      <AboutLeft>
        <Title>I AM</Title>
        <Name>MARCIN</Name>
        <ChangingText />
      </AboutLeft>
      <AboutRight>
        <AboutHeading>ABOUT</AboutHeading>
        <AboutText>
          Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem 
          placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar 
          vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere 
          ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos 
          orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis 
          nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris 
          pharetra vestibulum fusce dictum risus blandit quis suspendisse aliquet nisi sodales consequat magna ante condimentum 
        </AboutText>
      </AboutRight>
    </AboutDiv>
    
    
  );
}
