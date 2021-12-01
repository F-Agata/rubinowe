import React from "react";
import styled from 'styled-components'
import Btn from "../../styles/Btn";


const NavigationWrapp = styled.div`
  align-self: center;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  //border: 2px solid purple;
  flex-grow: 1;
`

const NavigatioNav = styled.nav`
  flex-grow: 1;
  flex-shrink: 1;
  //border: 2px solid orange;
`

const NavigationUl = styled.ul`
  display: flex;
  height: 60px;
  justify-content: center;
  //border: 2px saddlebrown solid;
  transition: 0.3s;
  :hover a {
    color:  ${props => props.theme.colors.colorText};
`

const NavigationLi = styled.li`
  margin-left: 30px;
  list-style: none;
  cursor: pointer;
  line-height: 60px;
  text-align: right;
  transition: 0.3s;
  :hover a {
    color:  ${props => props.theme.colors.colorTitle};
  }`

const NavigationLink = styled.a`
  text-decoration: none;
  height: 60px;
  color: ${props => props.theme.colors.colorPrimary};
  font-size: ${props => props.theme.fontSizes.fsTextSmall};
  font-weight: ${props => props.theme.fonts.fontMedium};
  line-height: 100%;
  transition: 0.3s;
  :active {
    color:  ${props => props.theme.colors.colorPrimary}}
`

const BtnNavigation = styled(Btn)`
  
  `

const NavigationMainListBig = ({ menuItems }) => {

    const menuItem = menuItems.map( (item) => (
        <NavigationLi key={item.id}>
            <NavigationLink href={"#"}>{item.name}</NavigationLink>
        </NavigationLi>
    ));

    return (
        <NavigationWrapp>
            <NavigatioNav>
                <NavigationUl>
                    {menuItem}
                </NavigationUl>
            </NavigatioNav>
            <BtnNavigation>kup teraz 2</BtnNavigation>
        </NavigationWrapp>
    )
}

export default NavigationMainListBig;