import React from 'react';
import aboutpicture from '../../static/img/aboutpicture.png';
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
import contactFormConfig from '../../config/contactFormConfig';

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
              <AppContact><a href="mailto:marcinplezia@gmail.com" className="cursor-hover-target">MAIL: marcinplezia@gmail.com</a></AppContact>
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
                  <Label>{contactFormConfig.firstName}</Label>
                </InputBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>{contactFormConfig.lastName}</Label>
                </InputBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>{contactFormConfig.email}</Label>
                </InputBox>
                <InputBox className="small-field">
                  <Input required />
                  <Label>{contactFormConfig.mobile}</Label>
                </InputBox>
                <InputBox className="big-field">
                  <Textarea required />
                  <Label>{contactFormConfig.message}</Label>
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
