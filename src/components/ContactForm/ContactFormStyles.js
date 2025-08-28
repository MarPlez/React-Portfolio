import styled from 'styled-components';

export const ContactFormContainer = styled.div`
  display: flex;
  background-color: #F3F2EE;
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
  color: #a85700;
  font-size: 26px;
  font-weight: bold;
  line-height: 1;
`;

export const ContactDetails = styled.div`
  margin-top: 30px;
`;

export const AppContact = styled.div`
  font-size: 12px;
  color: black;
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
  color: #a85700;
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
  border-bottom: 1px solid #d08300;
  font-size: 14px;
  color: black;
  outline: none;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 5px;
  background: none;
  border: none;
  border-bottom: 1px solid #d08300;
  font-size: 14px;
  color: black;
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
  color: #a85700;

  ${Input}:focus ~ &,
  ${Input}:valid ~ &,
  ${Textarea}:focus ~ &,
  ${Textarea}:valid ~ & {
    transform: translateY(-20px);
    font-size: 12px;
    color: #d08300;
  }
`;

