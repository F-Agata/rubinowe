import React from 'react'
import styled from 'styled-components';

import backgroundSection4 from "../../public/backgroundSection4.svg";
import bbackgroundSection4Vector from "../../public/backgroundSection4Vector.svg"
import TitleVerySmallWhite from "../../stylesjs/TitleVerySmallWhite";
import TitleOfPagesWhite from "../../stylesjs/TitleOfPagesWhite";
import TextBigWhite from "../../stylesjs/TextBigWhite";



const WrappSection4Background = styled.section`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: ${props => props.theme.colors.colorPrimary};
  background-image: url(${backgroundSection4.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  z-index: -2;
  ::before {
    content: "";
    position: absolute;
    width: 30vh;
    height: 30vh;
    z-index: -1;
    background: url(${bbackgroundSection4Vector.src});
    background-repeat: no-repeat;
    top: 10%;
    right: 10%;
    //transform: rotate(-180deg);
  }
  `

const WrappSection4 = styled.div`
  margin: 0px 40px 0 40px;
  padding: 190px 0px 190px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  //border: green solid 2px;
`

const TitleSection4VerySmall = styled(TitleVerySmallWhite)`
    margin-bottom: 15px;
`

const TitleSection4 = styled(TitleOfPagesWhite)`
    margin-bottom: 24px;
`

const TextSection4 = styled(TextBigWhite)`
    margin-bottom: 30px;
  `

const Section4 = () => {

    return (
        <WrappSection4Background>
            <WrappSection4>
                <TitleSection4VerySmall>Bardzo maly bialy tytul</TitleSection4VerySmall>
                <TitleSection4>Cześć, jestem tytułem sekcji drugiej</TitleSection4>
                <TextSection4>{`Minister zdrowia Adam Niedzielski był we wtorek gościem "Rozmowy Piaseckiego" w TVN24. Odpowiadał na pytania o wprowadzone przez rząd dodatkowe obostrzenia i rozprzestrzeniający się na świecie wariant koronawirusa omikron. Rozmowę relacjonowaliśmy na żywo w tvn24.pl.`}</TextSection4>
            </WrappSection4>
        </WrappSection4Background>

    )
}

export default Section4