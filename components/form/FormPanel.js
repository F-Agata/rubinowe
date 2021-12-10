import React from "react";
import styled from "styled-components";

import useForm from "./useForm";
import validationRules from "./validationRules";

import Btn from "../../stylesjs/Btn";

import TitleVerySmallGreen from "../../stylesjs/TitleVerySmallGreen";
import TitleOfPagesDark from "../../stylesjs/TitleOfPagesDark";
import TextSmallDark from "../../stylesjs/TextSmallDark";

const WrappPanelForm = styled.div`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${(props) => props.theme.colors.colorSmallMenu};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const WrappPanel = styled.form`
  //border: chartreuse 2px solid;
  margin: 0px 40px 0 40px;
  padding: 80px 0px 80px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
`;
const FormTitle = styled(TitleOfPagesDark)``;
const WrappOnePartOfForm = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  //align-items: flex-start;
  //justify-content: space-around;
`;
const LableF = styled.label`
  font-size: ${(props) => props.theme.fontSizes.fsTextSmall};
  font-weight: ${(props) => props.theme.fonts.fontRegular};
  color: ${(props) => props.theme.colors.colorText};
  line-height: 24px;

  width: 40%;
`;
const InputF = styled.input`
  font-size: ${(props) => props.theme.fontSizes.fsTextSmall};
  font-weight: ${(props) => props.theme.fonts.fontRegular};
  color: ${(props) => props.theme.colors.colorText};
  line-height: 24px;
  width: 60%;
`;
const TextAreaF = styled.textarea`
  min-height: 100px;
  min-width: 100px;

  font-size: ${(props) => props.theme.fontSizes.fsTextSmall};
  font-weight: ${(props) => props.theme.fonts.fontRegular};
  color: ${(props) => props.theme.colors.colorText};
  line-height: 24px;

  width: 60%;
`;
const BtnF = styled(Btn)`
  margin: 40px 0;
`;
const ErrorMessage = styled(TitleVerySmallGreen)`
  width: 100%;
`;

function FormPanel() {
  const { values, errors, handleChange, handleSubmit } =
    useForm(validationRules);

  return (
    <WrappPanelForm>
      <WrappPanel onSubmit={handleSubmit} noValidate>
        <FormTitle>Napisz do nas</FormTitle>

        <WrappOnePartOfForm>
          <LableF htmlFor={"username"}>Podaj imię</LableF>
          <InputF
            type={"text"}
            id={"username"}
            name={"username"}
            placeholder={"podaj imię"}
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </WrappOnePartOfForm>

        <WrappOnePartOfForm>
          <LableF htmlFor={"email"}>Podaj email</LableF>
          <InputF
            type={"email"}
            id={"email"}
            name={"email"}
            placeholder={"podaj email"}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </WrappOnePartOfForm>

        <WrappOnePartOfForm>
          <LableF htmlFor={"message"}>Napisz pytanie</LableF>
          <TextAreaF
            type={"text"}
            id={"message"}
            name={"message"}
            placeholder={"napisz wiadomość..."}
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </WrappOnePartOfForm>

        <WrappOnePartOfForm>
          <InputF
            type={"checkbox"}
            name={"accept"}
            id={"accept"}
            checked={values.accept}
            onChange={handleChange}
          />
          <LableF htmlFor={"accept"}>wyraź zgodę na odpowiedz emailem</LableF>
          {errors.accept && <ErrorMessage>{errors.accept}</ErrorMessage>}
        </WrappOnePartOfForm>

        <BtnF type={"submit"}> Wyślij</BtnF>
      </WrappPanel>
    </WrappPanelForm>
  );
}
export default FormPanel;
