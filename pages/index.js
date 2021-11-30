import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

import GoToTopOfPage from "./components/GoToTopOfPage";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Section1 from "./components/section1/Section1";


const AppWrapp = styled.div`
  border: orange 2px solid;
  min-width: 375px;
  max-width: 1800px;
  margin: 0 auto;
  text-align: left;
  min-height: 200vh;
  font-size: 16px;
  background-color: transparent;
  font-family:  'DM Sans', sans-serif;
  line-height: 30px;
  color: ${props => props.theme.colors.colorText};
  overflow: hidden;`

export default function Home() {
   return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <AppWrapp>
          <Navigation/>
          <Header/>
          <Section1/>
            <div>jestem pod headerem</div>

            <GoToTopOfPage/>
        </AppWrapp>
      </ThemeProvider>
  );
}
