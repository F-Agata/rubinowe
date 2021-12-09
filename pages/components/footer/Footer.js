import React from 'react'
import styled from 'styled-components';


const WrappFooter = styled.footer`
width: 100%;
  min-height: 100px;
background-color: black;
  text-align: center;

  `

const FooterInfo = styled.div`
     width: 100%;
 `

const Footer = () => {

    return (
        <WrappFooter>
            <FooterInfo>
                <div>info w footerze</div>
            </FooterInfo>
        </WrappFooter>
                  )
}

export default Footer