import styled from 'styled-components';

export const AboutDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #F3F2EE;
  padding: 50px;
  margin: 0 50px 50px 50px;
  border: 0.8px solid #E5E5E0;
  
  @media (max-width: 1200px) { 
  padding: 10px;
  margin: 0 30px 30px 30px;
  }

  @media (max-width: 768px) {
  padding: 0;
  margin: 0 30px 30px 30px;
  }
`;

export const AboutLeft = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
margin-left: 50px;

  @media (max-width: 1200px) {
  margin: 20px;
  }

  @media (max-width: 768px) {
  display: none;
  }
`;

export const Title = styled.h2`
  font-size: clamp(20px, 5vw, 60px);
  margin: 0;
  color: #d08300;
  line-height: 0.6;
`;

export const Name = styled.h1`
  font-size: clamp(30px, 5vw, 60px);;
  margin: 0;
  font-weight: bold;
`;

export const AboutRight = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
margin-left: 50px;

  @media (max-width: 1200px) { 
  margin: 0 20px 20px 20px;
}

  @media (max-width: 768px) { 
  padding: 20px;
  justify-content: center;
}

`;

export const AboutHeading = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: #a85700;
  font-family: "Poppins", sans-serif;
  font-size: clamp(20px, 3vw, 24px);
  line-height: 1.8;
  letter-spacing: 0.3px;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 50px;
  color: black;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 1.8;
  letter-spacing: 0.2px;
  text-align: justify;
  gap: 20px; 
  
  p {
    margin: 0; 
  }
    
@media (max-width: 1200px) {
margin-right: 20px;
}

@media (max-width: 768px) { 
font-size: clamp(14px, 2vw, 16px);
margin-right: 0px;
}
`;

