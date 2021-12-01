import React from 'react'
import styled from 'styled-components';


import TitleVerySmallGreen from "../../styles/TitleVerySmallGreen";
import TitleOfPagesDark from "../../styles/TitleOfPagesDark";
import TextSmallDark from "../../styles/TextSmallDark";

const WrappSection3Background = styled.div`
  min-width: 375px;
  max-width: 1800px;
  width: 100%;
  //border: orange 2px solid;
  background-color: #F9F8FF;
  display: flex;
  flex-direction: column;
  align-items: center;  
  justify-content: center;
   `

const WrappSection3 = styled.div`
  //border: chartreuse 2px solid;
  margin: 0px 40px 0 40px;
  padding: 190px 0px 190px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1170px;
  `

const TitleSection3VerySmall = styled(TitleVerySmallGreen)`
    `

const TitleSection3 = styled(TitleOfPagesDark)`
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  //border: brown 2px solid;
  `

const TextSection3 = styled(TextSmallDark)`
  text-align: center;
  line-height: 148%;
  //color: #424A4D;
`

const Section3 = () => {

    return (
        <WrappSection3Background>
           <WrappSection3>
                <TitleSection3VerySmall>mały zielony tutuł</TitleSection3VerySmall>
                <TitleSection3>Cześć, jestem tytułem sekcji trzeciej</TitleSection3>
                <TextSection3>Minister zdrowia Adam Niedzielski był we wtorek gościem "Rozmowy Piaseckiego" w TVN24. Odpowiadał na pytania o wprowadzone przez rząd dodatkowe obostrzenia i rozprzestrzeniający się na świecie wariant koronawirusa omikron. Rozmowę relacjonowaliśmy na żywo w tvn24.pl.</TextSection3>
            </WrappSection3>
       </WrappSection3Background>
    )
}

export default Section3