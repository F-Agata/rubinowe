import React from "react";
import styled, { css } from "styled-components";
import { Btn } from "../../stylesjs/Btn";


const NavigationMainListBig = ({ menuItems, addShadow }) => {
  const menuItem = menuItems.map((item) => (
    <NavigationLi key={item.id}>
      <NavigationLink href={`#${item.id}`} addShadow={addShadow}>
        {item.name}
      </NavigationLink>
    </NavigationLi>
  ));

  return (
    <NavigationBigWrapp>
      <NavigationWrapp>
        <NavigatioNav>
          <NavigationUl>{menuItem}</NavigationUl>
        </NavigatioNav>
      </NavigationWrapp>
      <WrappBtnNB>
          <BtnNBLink href={`#Contact`}>
              <BtnNB addShadow={addShadow}>Contact</BtnNB>
          </BtnNBLink>
      </WrappBtnNB>
    </NavigationBigWrapp>
  );
};

export default NavigationMainListBig;

const NavigationBigWrapp = styled.div`
  //border: 2px solid yellow;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`


const NavigationWrapp = styled.div`
  align-self: center;
  margin-right: 30px;
  display: flex;
  //justify-content: space-between;
  //border: 2px solid purple;
  flex-grow: 1;
`;

const NavigatioNav = styled.nav`
  flex-grow: 1;
  //border: 2px solid orange;
`;

const NavigationUl = styled.ul`
  display: flex;
  height: 62px;
  justify-content: center;
  transition: 0.3s;
  :hover a {
    color:  ${(props) => props.theme.colors.colorText};
`;

const NavigationLi = styled.li`
  //border: 2px saddlebrown solid;
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
//border: 2px saddlebrown solid;
//width: 265px;
display: flex;
justify-content: right;
align-content: center;
align-items: center;
margin-right: 30px`

const BtnNBLink=styled.a`
    display: block;
  cursor: pointer;
  `

const BtnNB = styled(Btn)`
    ${({ addShadow }) => css`
      height: ${addShadow ? "50px" : "60px"};
      `};
`;