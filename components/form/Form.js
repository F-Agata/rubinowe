import React, {useState} from "react";
import styled from "styled-components";

import FormPanel from "./FormPanel";

import TitleVerySmallGreen from "../../stylesjs/TitleVerySmallGreen";

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

const SuccessMassage = styled(TitleVerySmallGreen)`
    width: 100%;
    padding: 20px 0;
    text-align: center;
  padding-bottom: 80px;
  `

const Form = () => {

  const [isSubmited, setIsSubmitted] = useState(false)

  const submittedForm = () => {
    setIsSubmitted(true)
      console.log(isSubmited)
     }

  return (
  <WrappPanelForm>
    <FormPanel submittedForm={submittedForm} />
    {isSubmited && <SuccessMassage> Twoja wiadomość została wysłana. Odpowiemy na nią najszybciej jak to możliwe</SuccessMassage>}
  </WrappPanelForm>
  )
};

export default Form;
