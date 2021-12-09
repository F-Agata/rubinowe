import React from "react";
import styled from "styled-components";

import useForm from "./useForm";
import validationRules from "./validationRules";

import Btn from "../../styles/Btn";

const WrappPanelForm = styled.div`
   
`
const WrappPanel = styled.form`
`
const FormTitle = styled.h1`
`
const WrappOnePartOfForm = styled.div`
`
const LableF = styled.label`
`
const InputF = styled.input`
`
const TextAreaF = styled.textarea`
    min-height: 100px;
  min-width: 100px;
`
const BtnF = styled(Btn)`
`
const ErrorMessage = styled.p`
color:red;
  `

function FormPanel() {

    const {values, errors, handleChange, handleSubmit} = useForm(validationRules)

    return (
        <WrappPanelForm>
            <WrappPanel
                onSubmit={handleSubmit}
                noValidate>
                <FormTitle>Napisz do nas</FormTitle>

                <WrappOnePartOfForm>
                    <LableF htmlFor={'username'}>Podaj imię</LableF>
                    <InputF
                        type={'text'}
                        id={'username'}
                        name={'username'}
                        placeholder={'podaj imię'}
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
                </WrappOnePartOfForm>

                <WrappOnePartOfForm>
                    <LableF htmlFor={'email'}>Podaj email</LableF>
                    <InputF
                        type={'email'}
                        id={'email'}
                        name={'email'}
                        placeholder={'podaj email'}
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                </WrappOnePartOfForm>

                <WrappOnePartOfForm>
                    <LableF htmlFor={'message'}>Napisz pytanie</LableF>
                    <TextAreaF
                        type={'text'}
                        id={'message'}
                        name={'message'}
                        placeholder={'napisz wiadomość...'}
                        value={values.message}
                        onChange={handleChange}
                    />
                    {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
                </WrappOnePartOfForm>

                <WrappOnePartOfForm>
                    <InputF
                        type={'checkbox'}
                        name={'accept'}
                        id={'accept'}
                        checked={values.accept}
                        onChange={handleChange}
                    />
                    <LableF htmlFor={'accept'}>wyraź zgodę na odpowiedz emailem</LableF>
                    {errors.accept && <ErrorMessage>{errors.accept}</ErrorMessage>}
                </WrappOnePartOfForm>

                <BtnF type={"submit"}> Wyślij</BtnF>

            </WrappPanel>
        </WrappPanelForm>
    );
}
export default FormPanel;