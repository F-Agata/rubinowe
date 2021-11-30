import React from 'react'
import styled from 'styled-components';

import Section1Elements from "./Section1Elements";

import backgroundSection1 from '../../../public/backgroundSection1.svg'

import TitleOfPagesDark from "../../styles/TitleOfPagesDark";
import TitleVerySmallGreen from "../../styles/TitleVerySmallGreen";

const WrappSection1Background = styled.div`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${props => props.theme.colors.colorPrimary};
  background-image: url(${backgroundSection1.src});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: left 30px;
  display: flex;
  justify-content: center;
   @media (min-width: 992px) {
     background-size: 100% ;
   }
  `

const WrappSection1 = styled.div`
  //margin: 0 auto;
  //border: chartreuse 2px solid;
  margin: 0px 40px 0 40px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: start;
  //padding-top: 40px;
  max-width: 1170px;
  //transform: rotate(-270deg);
  //border: green solid 2px;
  //@media (min-width: 992px) {
  //  flex-direction: row-reverse;
  //  justify-content: space-between;
  //  align-items: center;
  //    }
`

const TitleSection1VerySmall = styled(TitleVerySmallGreen)`
    `

const TitleSection1 = styled(TitleOfPagesDark)`
    max-width: 500px;
  padding-top: 30px;
  padding-bottom: 30px;
  //height: 300px;
  //border: brown 2px solid;
`

const Section1 = () => {

    return (
        <WrappSection1Background>
            <WrappSection1>
                <TitleSection1VerySmall>Bardzo malutki tytulik</TitleSection1VerySmall>
                <TitleSection1>Cześć, jestem tytułem sekcji pierwszej</TitleSection1>
                <Section1Elements/>
            </WrappSection1>

        </WrappSection1Background>

    )
}

export default Section1