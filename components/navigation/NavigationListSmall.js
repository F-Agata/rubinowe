import React from "react";
import styled from "styled-components";

import logo from "../../public/logo.svg";
import iconOpened from "../../public/iconHamburgerMenuOpened.svg";



const NavigationMainListSmall = ({ menuItems, changeMenu }) => {
  const menuItem = menuItems.map((item) => (
    <NavigationLi key={item.id}>
      <NavigationLink href={`#${item.id}`} onClick={changeMenu} >{item.name}</NavigationLink>
    </NavigationLi>
  ));

  return (
    <NavigationWrapp>
      <NavigationListWrapp>
        <TopMenu>
          <WrappLogo onClick={changeMenu}>
            <WrappLogoLink href={`#Home`}>
              <Logo src={logo.src} alt={"logo"} />
            </WrappLogoLink>
          </WrappLogo>
          <WrapIcon>
            <ToggleMenuButton onClick={changeMenu}>
              <IconToClosed src={iconOpened.src} alt={"close menu"} />
            </ToggleMenuButton>
          </WrapIcon>
        </TopMenu>
        <NavigationNav>
          <NavigationUl>{menuItem}</NavigationUl>
        </NavigationNav>
      </NavigationListWrapp>
    </NavigationWrapp>
  );
};

export default NavigationMainListSmall;

const NavigationWrapp = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(50px);
  z-index: 999;
`;

const NavigationListWrapp = styled.div`
  background-color: ${(props) => props.theme.colors.colorSmallMenu};
  box-shadow: ${(props) => props.theme.shadows.shadowGrey};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopMenu = styled.div`
   background-color: #f9f8ff;
   padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrappLogo = styled.div`
  height: 45px;
  text-align: left;
  //border: #0070f3 2px solid;
`;

const WrappLogoLink = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
`

const Logo = styled.img`
  height: 100%;
`;

const WrapIcon = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.colorSmallMenu};
  border: 1px solid ${(props) => props.theme.colors.colorTitle};
  //border: gold 2px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  :hover img {
    transform: scale(0.8, 0.8);
  }
`;

const IconToClosed = styled.img`
  //width: 100%;
  height: 35px;
  width: 35px;
`;

const ToggleMenuButton = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`;

const NavigationNav = styled.nav`
  //border: aquamarine 2px solid;
  text-align: center;
  margin: 20px 0;
`;

const NavigationUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: red 2px solid
`;

const NavigationLi = styled.li`
  list-style: none;
  cursor: pointer;
  line-height: 80px;
  transition: 0.3s;
  //border: orange 2px solid;
  width: 100%;
  position: relative;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    border-radius: 15px;
    width: 100%;
    height: 10px;
    border-radius: ;
    //z-index: -1;
    background-color: ${(props) => props.theme.colors.colorSecondary};
    bottom: -10px;
    left: 0;
    transition: 0.3s;
  }
  :hover a {
    color: ${(props) => props.theme.colors.colorSecondary};
  }
  :hover {
    ::before {
      bottom: -9px;
    }
  }
`;

const NavigationLink = styled.a`
  text-decoration: none;
  height: 80px;
  color: ${(props) => props.theme.colors.colorTitle};
  font-size: ${(props) => props.theme.fontSizes.fsTextSmall};
  font-weight: ${(props) => props.theme.fonts.fontMedium};
  line-height: 100%;
  transition: 0.3s;
  letter-spacing: 2px;
  transition: 0.3s;
  :hover {
    color: ${(props) => props.theme.colors.colorSecondary};
  }
`;
