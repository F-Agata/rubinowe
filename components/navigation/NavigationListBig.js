import React from "react";
import styled, { css } from "styled-components";
import { Btn } from "../../stylesjs/Btn";

const NavigationWrapp = styled.div`
  align-self: center;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  //border: 2px solid purple;
  flex-grow: 1;
`;

const NavigatioNav = styled.nav`
  flex-grow: 1;
  flex-shrink: 1;
  //border: 2px solid orange;
`;

const NavigationUl = styled.ul`
  display: flex;
  height: 62px;
  justify-content: center;
  //border: 2px saddlebrown solid;
  transition: 0.3s;
  :hover a {
    color:  ${(props) => props.theme.colors.colorText};
`;

const NavigationLi = styled.li`
  margin-left: 30px;
  list-style: none;
  cursor: pointer;
  line-height: 62px;
  text-align: right;
  transition: 0.3s;
  :hover a {
    color: ${(props) => props.theme.colors.colorTitle};
  }
`;

const NavigationLink = styled.a`
  ${({ addShadow, theme }) => css`
    color: ${addShadow ? theme.colors.colorTitle : theme.colors.colorPrimary};
    font-size: ${theme.fontSizes.fsTextSmall};
    font-weight: ${theme.fonts.fontMedium};
    :active {
      color: ${theme.colors.colorPrimary};
    }
  `};
  text-decoration: none;
  height: 62px;
  line-height: 100%;
  transition: 0.3s;
`;

const WrappBtnNB = styled.div`
width: 265px;
display: flex;
justify-content: right;
align-content: center;
align-items: center;
margin-right: 30px`

const BtnNB = styled(Btn)`
  
  ${({ addShadow }) => css`
      height: ${addShadow ? "50px" : "60px"};
     //padding: ${addShadow ? "10px 40px" : "20px 50px"};

  `};
`;

const NavigationMainListBig = ({ menuItems, addShadow }) => {
  const menuItem = menuItems.map((item) => (
    <NavigationLi key={item.id}>
      <NavigationLink href={"#"} addShadow={addShadow}>
        {item.name}
      </NavigationLink>
    </NavigationLi>
  ));

  return (
    <>
      <NavigationWrapp>
        <NavigatioNav>
          <NavigationUl>{menuItem}</NavigationUl>
        </NavigatioNav>
      </NavigationWrapp>
      <WrappBtnNB>
        <BtnNB addShadow={addShadow}>kup teraz 2</BtnNB>
      </WrappBtnNB>
    </>
  );
};

export default NavigationMainListBig;
