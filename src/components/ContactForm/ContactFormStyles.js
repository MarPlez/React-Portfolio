// ContactFormStyles.js
import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  display: flex;
  background-color: #ece8e0;
  border-radius: 30px;
  box-shadow: 0 0 20px rgba(50, 50, 50, 0.2);
  padding: 50px;
  margin: 50px;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const FormTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #ab5429;
  font-size: 26px;
  font-weight: bold;
`;

export const ContactDetails = styled.div`
  margin-top: 30px;
`;

export const AppContact = styled.div`
  font-size: 12px;
  color: #cf8536;
  margin-top: 10px;
`;

export const ContactPicture = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  padding-top: 40px;
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 30px 50px 30px 50px;

`;

export const ContactFormWrapper = styled.div``;

export const Title = styled.h2`
  color: #ab5429;
  font-size: 20px;
  margin-bottom: 40px;
`;

export const FormBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 35px;

  &.small-field {
    width: 47%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &.big-field {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  background: none;
  border: none;
  border-bottom: 1px solid #cf8536;
  font-size: 14px;
  color: #333;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 5px;
  background: none;
  border: none;
  border-bottom: 1px solid #cf8536;
  font-size: 14px;
  color: #333;
  outline: none;
  resize: none;
  min-height: 80px;
`;

export const Label = styled.span`
  position: absolute;
  left: 5px;
  top: 10px;
  pointer-events: none;
  transition: 0.3s;
  font-size: 14px;
  color: #cf8536;

  ${Input}:focus ~ &,
  ${Input}:valid ~ &,
  ${Textarea}:focus ~ &,
  ${Textarea}:valid ~ & {
    transform: translateY(-20px);
    font-size: 12px;
    color: #ab5429;
  }
`;

export const SubmitButton = styled.input`
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 14px;

  &:hover {
    background-color: #ab5429;
  }
`;
