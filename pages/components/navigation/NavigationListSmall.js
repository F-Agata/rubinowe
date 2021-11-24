import React from "react";
import styled from 'styled-components'

import logo from "../../../public/logoWhite.svg";
import iconOpened from '../../../public/iconHamburgerMenuOpened.svg'

const NavigationWrapp = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(10px);
  z-index: 999;`

const NavigationListWrapp = styled.div`
  background: ${props => props.theme.gradients.gradientVioletToBlue};
  box-shadow: ${props => props.theme.shadows.shadowWhite};
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 30px;
`

const TopMenu = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.colorBorder};
  margin: 10px 0 30px 0;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center`

const WrappLogo = styled.div`
  height: 45px;
  text-align: left; 
`

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  //box-shadow: ${props => props.theme.shadows.shadowWhite};
  background: ${props => props.theme.gradients.gradientBox};
  border: 1px solid ${props => props.theme.colors.colorSecondary};
  //border: gold 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
    `

const ToggleMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
   `

const NavigationNav = styled.nav`
   //border: aquamarine 2px solid;
   flex-grow: 1; 
   text-align: left`

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 60px;`
//border: red 2px solid`

const NavigationLi = styled.li`
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  transition: 0.3s;
  :hover a {
    color:  ${props => props.theme.colors.colorPrimary};
  }`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: ${props => props.theme.colors.colorText};
  text-transform: uppercase;
  color: ${props => props.theme.colors.colorPrimary};
  font-size: ${props => props.theme.fontSizes.fsTextSmall};
  font-weight: ${props => props.theme.fonts.fontMedium};
  line-height: 100%;
  transition: 0.3s;
  letter-spacing: 2px;
  transition: 0.3s;`

const BottomMenu = styled.div`
  margin: 30px 0px 40px 0px;
  text-align: left;
  
  //border: yellow 2px solid;
`

const NavigationMainListSmall = ({ menuItems, changeMenu }) => {

    const menuItem = menuItems.map( (item) => (
        <NavigationLi key={item.id}>
            <NavigationLink href={"#"}>{item.name}</NavigationLink>
        </NavigationLi>
    ));

    return (
        <NavigationWrapp>
            <NavigationListWrapp>
                <TopMenu>
                    <WrappLogo>
                        <Logo src={logo.src} alt={"logo"}/>
                    </WrappLogo>
                    <WrapIcon>
                        <ToggleMenuButton onClick={changeMenu}>
                            <img src={iconOpened.src} alt={"zamknij menu"}/>
                        </ToggleMenuButton>
                    </WrapIcon>
                </TopMenu>
                <NavigationNav>
                    <NavigationUl>
                        {menuItem}
                    </NavigationUl>
                </NavigationNav>
                {/*<BottomMenu>*/}
                {/*    <div>tutaj byly ikonki social</div>*/}
                {/*</BottomMenu>*/}
            </NavigationListWrapp>
        </NavigationWrapp>
    )
}

export default NavigationMainListSmall;