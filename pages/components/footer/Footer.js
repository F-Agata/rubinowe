import React from 'react'
import styled from 'styled-components';

const Foo = styled.footer`
height: 100px;
width: 100%;
background-color: black`

const Footer = () => {

    return (
        <Foo>jestem footer</Foo>
        // <WrappSection2Background>
        //     <WrappSection2>
        //         <TitleSection2VerySmall>Bardzo maly bialy tytul</TitleSection2VerySmall>
        //         <TitleSection2>Cześć, jestem tytułem sekcji drugiej</TitleSection2>
        //         <TextSection2>Minister zdrowia Adam Niedzielski był we wtorek gościem "Rozmowy Piaseckiego" w TVN24. Odpowiadał na pytania o wprowadzone przez rząd dodatkowe obostrzenia i rozprzestrzeniający się na świecie wariant koronawirusa omikron. Rozmowę relacjonowaliśmy na żywo w tvn24.pl.</TextSection2>
        //     </WrappSection2>
        //
        // </WrappSection2Background>

    )
}

export default Footer