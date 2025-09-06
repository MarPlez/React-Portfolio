import React from 'react';
import aboutpicture from '../img/aboutpicture.png';
import {
  ContactFormContainer,
  LeftPanel,
  FormTitle,
  ContactDetails,
  AppContact,
  ContactPicture,
  RightPanel,
  ContactFormWrapper,
  Title,
  FormBox,
  InputBox,
  Input,
  Textarea,
  Label,
  TextWrapper
} from './ContactFormStyles';
import SendButton from './SendButton';

const ContactForm = () => {
  return (
    <ContactFormContainer>
          <LeftPanel>
            <TextWrapper>
            <FormTitle>
              <span>CONTACT</span>
              <span>FORM</span>
            </FormTitle>
            <ContactDetails>
              <AppContact>MAIL : marcinplezia@gmail.com</AppContact>
              <AppContact>CONTACT INFO : +48 691 804 400</AppContact>
            </ContactDetails>
            </TextWrapper>
            <ContactPicture src={aboutpicture} alt="My Portrait" />
          </LeftPanel>

          <RightPanel>
            <ContactFormWrapper>
              <Title>Send a Message</Title>
              <FormBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>First Name</Label>
                </InputBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>Last Name</Label>
                </InputBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>Email</Label>
                </InputBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>Mobile Number</Label>
                </InputBox>
                <InputBox className="big-field">
                  <Textarea required />
                  <Label>Write Your Message Here.</Label>
                </InputBox>
                <InputBox className="big-field">
                  <SendButton className="cursor-hover-target" />
                </InputBox>
              </FormBox>
            </ContactFormWrapper>
          </RightPanel>
    </ContactFormContainer>
  );
};

export default ContactForm;
