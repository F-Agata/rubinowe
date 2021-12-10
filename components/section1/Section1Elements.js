import React from 'react'
import styled from 'styled-components'

import icon01Section1 from "../../public/iconSearch.svg"
import icon02Section1 from "../../public/icon3User.svg"
import icon03Section1 from "../../public/iconChart.svg"
import icon04Section1 from "../../public/iconBag2.svg"
import icon05Section1 from "../../public/iconGraph.svg"
import icon06Section1 from "../../public/iconDiscount.svg"
import imgHeader from "../../public/Group 27013.png";
import TitleOfSmallPart from "../../stylesjs/TitleOfSmallPart";
import TextSmallDark from "../../stylesjs/TextSmallDark";

const section1Elements = [
    {name: 'project01',
        id: "section1project01",
        icon: icon01Section1,
        text: "Aby zapewnić poprawne działanie naszego serwisu, zapisujemy pliki cookie na komputerach naszych użytkowników. Korzystająna ich używanie. W każdej chwili możesz wyłączyć obsługę plików cookie ustawiając odpowieglądarki internetowej",
    },
    {name: 'project02',
        id: "section1project02",
        icon: icon02Section1,
        text: "Aby zapewnić poprawne działanie naszego serwisu, zapisujemy pliki cookie na komputerach naszych użytkając odpowiedni parametr przeglądarki internetowej",
    },
    {name: 'project03',
        id: "section1project03",
        icon: icon03Section1,
        text: "Aby zapewnić poprawne działanie naszego serwisu, zapisujemy pliki couterach naszych użytkowników. Korzystając z serwisu, wyrażasz zgodę na ich używanie. W każdej chwili możesz wyłączyć obsługę plików cookie ustawiając odpowiedni parametr przeglądarki internetowej",
    },
    {name: 'project04',
        id: "section1project04",
        icon: icon04Section1,
        text: "Aby zapewnić poprawne działanie naszego serwisu, zapisujemy pliki cookie na komputerożesz wyłączyć obsługę plików cookie ustawiając odpowiedni parametr przeglądarki internetowej",
    },
    {name: 'project05',
        id: "section1project05",
        icon: icon05Section1,
        text: "Aby zapewnić poprawne działanie naszego serwisu, zapisujemy pliki cookie na komputerach naszych użytkowników. Korzystając z serwisu, wyrażasz zgodę na ich używanie. W każdej chwili możesz wyłączyć obsługę plików cookie ustawiając odpowiedni parametr przeglądarki internetowej",
    },
    {name: 'project06',
        id: "section1project06",
        icon: icon06Section1,
        text: "Aby zapewnić poprawne działanie naszego serwisu, zapisujemy pliki cookie na kompuvnhvnvnterach naszych użytkowników. Korzystając z serwisu, wyrażasz zgodę na ich używanie. W każdej chwili możesz wyłączyć obsługę plików cookie ustawiając odpowiedni parametr przeglądarki internetowej",
    },
]

const WrappSection1Elements = styled.div`
    display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
`

const WrappElement = styled.div`
  background-color:  ${props => props.theme.colors.colorPrimary};
  box-shadow: 0px 20px 50px rgba(59, 62, 67, 0.05);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
    //border: red 2px solid;
 margin-bottom: 20px;
  padding: 50px 20px 50px 50px;
  width: 100%;
  @media (min-width: 700px) {
    width: 49%;
  }
  @media (min-width: 1170px) {
    width: 32%;
  }

  
  
`

const WrappIcon = styled.div`
  width: 50px;
  height: 50px;
  box-shadow: 0px 10px 20px rgba(197, 158, 145, 0.1);
  border-radius: 15px;
  background-color: ${props => props.theme.colors.colorTitleVerySmall};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconSection1 = styled.img`
width: 28px;
height: 28px`

const TitleElement = styled(TitleOfSmallPart)`
    margin-bottom: 15px;
`

const Text = styled(TextSmallDark)`
`

const Section1Elements = () => {

    const section1Element = section1Elements.map( (item) => (
        <WrappElement key={item.id}>
            <WrappIcon>
                <IconSection1 src={imgHeader.src} alt={"zdjęcie główne"}/>
            </WrappIcon>
            <TitleElement href={"#"}>{item.name}</TitleElement>
            <Text>{item.text}</Text>
        </WrappElement>
    ));

    return (
        <WrappSection1Elements>
            {section1Element}
        </WrappSection1Elements>

    )
}

export default Section1Elements