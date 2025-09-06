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
          <p>Hi! I’m Marcin — a former photographer and now an aspiring Frontend Developer based in Poland. In the past, I told stories through pictures — now I’m learning to tell them through code.</p>
          <p> For over 15 years, I worked as a professional photographer, completing advertising projects for companies both in Poland and abroad. Since 2010, I’ve also been running photography courses for individuals and corporate clients, sharing my knowledge and experience. Collaborating with clients and working as part of a team has always been a natural part of my career.</p>
          <p>Today, I’m focused on learning programming and applying my artistic background to the frontend projects I create. I enjoy combining creativity with technology to deliver engaging digital experiences.</p>
          <p>On a personal note, I’m a proud father of three wonderful daughters.</p>
          <p>Now it’s time for a new chapter in my journey. I am currently seeking an opportunity to grow as a programmer in a full-time remote position as a Junior Frontend Developer.</p>
        </AboutText>
      </AboutRight>
    </AboutDiv>
  );
}
