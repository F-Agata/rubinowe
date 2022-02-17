import React, {useState, useEffect} from "react";
import styled from "styled-components";

import FormPanel from "./FormPanel";

import TitleVerySmallGreen from "../../stylesjs/TitleVerySmallGreen";
import DivToNavigation from "../DivToNavigation";

const Form = () => {

  const [isSubmited, setIsSubmitted] = useState(false)

  const submittedForm = () => {
    setIsSubmitted(true)
     }

  useEffect(() => {
    const successInfo = setTimeout(() => setIsSubmitted(false), 5000);
    return () => clearTimeout(successInfo);
  }, [isSubmited]);

  return (
      <>
        <DivToNavigation id={"Contact"}/>
          <WrappPanelForm>
    <FormPanel submittedForm={submittedForm} />
    {isSubmited && <SuccessMassage>Success! Your message was send! </SuccessMassage>}
  </WrappPanelForm>
        </>
  )
};

export default Form;

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
    padding: 20px 0 80px 0;
    text-align: center;
  transition: 0.3s ;
   `
