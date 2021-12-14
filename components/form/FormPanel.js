import React, {  useEffect } from "react";
import styled, {css} from "styled-components";

import useForm from "./useForm";
import validationRules from "./validationRules";


import { Btn } from "../../stylesjs/Btn";

import TitleVerySmallGreen from "../../stylesjs/TitleVerySmallGreen";
import TitleOfPagesDark from "../../stylesjs/TitleOfPagesDark";

const WrappPanel = styled.form`
  width: 100%;
  //border: chartreuse 2px solid;
  margin: 0px 40px 0 40px;
  padding: 80px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1170px;
 `;

const FormTitle = styled(TitleOfPagesDark)`
   `;

const WrappOnePartOfForm = styled.div`
  //border: #0070f3 solid 2px;
  width: 100%;
  max-width: 700px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const LableF = styled.label`
  ${({ theme }) => css`
  font-size: ${theme.fontSizes.fsTextSmall};
  font-weight: ${theme.fonts.fontRegular};
  color: ${theme.colors.colorText};  
      `
  };
  line-height: 24px;
  width: 145px;
  //border: orange 2px solid;
`;

const LableFCh = styled.label`
  ${({ theme }) => css`
  font-size: ${theme.fontSizes.fsTextSmall};
  font-weight: ${theme.fonts.fontRegular};
  color: ${theme.colors.colorText};  
      `
  };
  line-height: 24px;
  //border: orange 2px solid;
  `

const InputF = styled.input`
  ${({ theme }) => css`
  font-size: ${theme.fontSizes.fsTextSmall};
  font-weight: ${theme.fonts.fontRegular};
  color: ${theme.colors.colorText};  
      `
  };
  line-height: 24px;
  flex-grow: 1;
  border: ${(props) => props.theme.colors.colorTitle} 1px solid;
::placeholder {
    ${({ theme }) => css`
  font-size: ${theme.fontSizes.fsTextSmall};
  font-weight: ${theme.fonts.fontRegular};
  color: ${theme.colors.colorText};  
      `
    }
  }
  :focus {
    border: ${(props) => props.theme.colors.colorSecondary} 1px solid ;
  }
  `;

const WrappInputCheckbox = styled.div`
  width: 145px;
  height: 28px;
   //border: orange 2px solid;
  display: flex;
  justify-content: space-around;
    `

const InputFCh = styled.input`
    //border: orange 2px solid;
  position: absolute;
   cursor: pointer;
  width: 0px;
  height: 0px;
  :before {
    content: "";
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    ${({theme}) => css`
border: ${theme.colors.colorSecondary} 2px solid;
background-color: ${theme.colors.colorSmallMenu};
  `
    };
          }
  :checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    transition: 0.3s ;
${({theme}) => css`
border: ${theme.colors.colorSecondary} 2px solid;
background-color: ${theme.colors.colorSecondary};
  `
  };
}
:after {
content: "";
display: block;
width: 0px;
height: 0px;
border: ${(props) => props.theme.colors.colorSmallMenu} solid;
border-width: 0 0px 0px 0;
ransform: rotate(180deg);
position: absolute;
top: 0px;
left: 50px;
transition: 0.3s ;
}
:checked:after {
content: "";
display: block;
width: 8px;
height: 20px;
border: ${(props) => props.theme.colors.colorSmallMenu} solid;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
position: absolute;
top: 0px;
left: 9px;
}
`

const TextAreaF = styled.textarea`
   ${({ theme }) => css`
  font-size: ${theme.fontSizes.fsTextSmall};
  font-weight: ${theme.fonts.fontRegular};
  color: ${theme.colors.colorText};  
      `
  };
  line-height: 24px;
  min-height: 100px;
  min-width: 100px;
  flex-grow: 1;
 
  ::placeholder {
       ${({theme}) => css`
      font-size: ${theme.fontSizes.fsTextSmall};
      font-weight: ${theme.fonts.fontRegular};
      color: ${theme.colors.colorText};
    `
    }
       font-family:  'DM Sans', sans-serif;
  }
  :focus {
    border: ${(props) => props.theme.colors.colorSecondary} 1px solid;
  }
`;

const BtnF = styled(Btn)`
  margin: 40px 0;
`;

const ErrorMessage = styled(TitleVerySmallGreen)`
  width: 100%;
  margin-left: 145px;
  padding: 20px 0;
  //border: purple 2px solid;
`;

function FormPanel({submittedForm}) {
  const { values, errors, handleChange, handleSubmit } =
    useForm(validationRules, submittedForm);

  // useEffect(()=>{console.log(values.accept)},[])

  return (
      <WrappPanel onSubmit={handleSubmit} noValidate>
        <FormTitle>napisz do nas</FormTitle>

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
          <WrappInputCheckbox>
           <InputFCh
            type={"checkbox"}
            name={"accept"}
            id={"accept"}
            checked={values.accept}
            onChange={handleChange}
           />
          </WrappInputCheckbox>
          <LableFCh htmlFor={"accept"}>wyraź zgodę na odpowiedz emailem</LableFCh>
          {errors.accept && <ErrorMessage>{errors.accept}</ErrorMessage>}
        </WrappOnePartOfForm>
        <BtnF type={"submit"}> Wyślij</BtnF>
      </WrappPanel>
  );
}
export default FormPanel;
