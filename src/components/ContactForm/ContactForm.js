// ContactForm.jsx
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
  SubmitButton
} from './ContactFormStyles';

const ContactForm = () => {
  return (
    <ContactFormContainer>
          <LeftPanel>
            <FormTitle>
              <span>CONTACT</span>
              <span>FORM</span>
            </FormTitle>
            <ContactDetails>
              <AppContact>MAIL : marcinplezia@gmail.com</AppContact>
              <AppContact>CONTACT INFO : +48 691 804 400</AppContact>
            </ContactDetails>
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
                  <Input type="email" required />
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
                  <SubmitButton className="cursor-hover-target" type="submit" value="Submit" />
                </InputBox>
              </FormBox>
            </ContactFormWrapper>
          </RightPanel>
    </ContactFormContainer>
  );
};

export default ContactForm;
