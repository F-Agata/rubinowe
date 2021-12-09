import React from 'react'
import styled from 'styled-components';
import Form from "../form/Form";

const WrappFooter = styled.footer`
width: 100%;
background-color: black;
display: flex;
flex-wrap: wrap;
  border: yellow 2px solid;
  `

const FooterInfo = styled.div`
    border: #0070f3 2px solid;
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
`

const Footer = () => {

    return (
        <WrappFooter>
            <FooterInfo>
                <div>info w footerze</div>
            </FooterInfo>
            <Form/>
        </WrappFooter>
                  )
}

export default Footer