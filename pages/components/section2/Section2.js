import React from 'react'
import styled from 'styled-components';

import backgroundSection2 from "../../../public/backgroundSection2.svg";
import TitleVerySmallWhite from "../../styles/TitleVerySmallWhite";
import TitleOfPagesWhite from "../../styles/TitleOfPagesWhite";
import TextBigWhite from "../../styles/TextBigWhite";



const WrappSection2Background = styled.div`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${props => props.theme.colors.colorPrimary};
  background-image: url(${backgroundSection2.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  display: flex;
  justify-content: center;
  `

const WrappSection2 = styled.div`
  margin: 0px 40px 0 40px;
  padding: 190px 0px 190px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  //border: green solid 2px;
`

const TitleSection2VerySmall = styled(TitleVerySmallWhite)`
    margin-bottom: 15px;
`

const TitleSection2 = styled(TitleOfPagesWhite)`
    margin-bottom: 24px;
`

const TextSection2 = styled(TextBigWhite)`
    margin-bottom: 30px;
`


const Section2 = () => {

    return (
        <WrappSection2Background>
            <WrappSection2>
                <TitleSection2VerySmall>Bardzo maly bialy tytul</TitleSection2VerySmall>
                <TitleSection2>Cześć, jestem tytułem sekcji drugiej</TitleSection2>
                <TextSection2>Minister zdrowia Adam Niedzielski był we wtorek gościem "Rozmowy Piaseckiego" w TVN24. Odpowiadał na pytania o wprowadzone przez rząd dodatkowe obostrzenia i rozprzestrzeniający się na świecie wariant koronawirusa omikron. Rozmowę relacjonowaliśmy na żywo w tvn24.pl.</TextSection2>
        </WrappSection2>

        </WrappSection2Background>

    )
}

export default Section2