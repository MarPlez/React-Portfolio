import styled from 'styled-components';

export const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #ece8e0;
  padding: 50px;
  margin: 0 50px 50px 50px;
`;

export const AboutLeft = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-left: 50px;
`;

export const Title = styled.h2`
  font-size: 72px;
  margin: 0;
  color: #cf8536;
  line-height: 0.6;
`;

export const Name = styled.h1`
  font-size: 72px;
  margin: 0;
  font-weight: bold;
`;

export const AboutRight = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
padding-left: 80px;
`;


export const AboutText = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 50px;
  color: #7d6754;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  line-height: 1.8;
  letter-spacing: 0.3px;
  text-align: justify;
`;

export const AboutHeading = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #ab5429;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  line-height: 1.8;
  letter-spacing: 0.3px;
`;