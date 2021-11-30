import React from 'react'
import styled from 'styled-components';

import backgroundHeader from '../../../public/backgroundHeader.svg'
import imgHeader from '../../../public/Group 27013.png'

import TextBigWhite from "../../styles/TextBigWhite";
import Btn from "../../styles/Btn";

const WrappHeaderBackground = styled.div`
  background-color: ${props => props.theme.colors.colorPrimary};;
  background-image: url(${backgroundHeader.src});
  background-repeat: no-repeat;
  background-size: auto 70%;
  background-position: top center;
  min-width: 375px;
  max-width: 1800px;
  //border: red solid 2px;
  //margin: -250px 0px 0px 0px ;
  //width: 100%;
  @media (min-width: 1500px) {
    background-size: 100% auto;
  }  
  `

const WrappHeader = styled.div`
  //margin: 0px 40px 0 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
  //max-width: 900px ;
  //border: green solid 2px;
  //@media (min-width: 992px) {
  //  flex-direction: row-reverse;
  //  justify-content: space-between;
  //  align-items: center;
  //    }
`

const TitleHeader = styled.h1 `
  font-weight: ${props => props.theme.fonts.fontMedium};
  color:  ${props => props.theme.colors.colorPrimary};
  font-weight: 500;
  font-size: 68px;
  line-height: 120%;
  text-align: center;
  //padding-top: 250px;
`

const TextHeader = styled(TextBigWhite)`
    margin: 10px 0px 30px 0px;
`

const WrappImgHeader = styled.div`
  //border: gold 2px solid;
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 40px;
  
    @media (min-width: 992px) {
    margin-left: 40px;
    margin-right: 40px;
    max-width: 1170px ;
  }
`

const ImgHeader = styled.img`
width: 100%;
  //border: green solid 2px;
`


const Header = () => {

    // useEffect(()=>{console.log(logo)},[])

    return (
        <WrappHeaderBackground>
            <WrappHeader>
               <TitleHeader>Cześć, jestem tytułem</TitleHeader>
               <TextHeader>a ja jestem takim textem pisanym 20px czyli TextBigWhite</TextHeader>
               <Btn>Kup teraz</Btn>
               <WrappImgHeader>
                    <ImgHeader src={imgHeader.src} alt={"zdjęcie główne"}/>
               </WrappImgHeader>
            </WrappHeader>
        </WrappHeaderBackground>

    )
}

export default Header