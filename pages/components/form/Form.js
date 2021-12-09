import React from "react";
import styled from 'styled-components';

import FormPanel from "./FormPanel";

const WrappFormPanel = styled.div`
width: 100%;
  padding-bottom: 40px;
  @media (min-width: 992px) {
    width: 50%;
  }
`

const Form = () => {

    return (
        <WrappFormPanel>
            <FormPanel/>
        </WrappFormPanel>

    )
}

export default Form