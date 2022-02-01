import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useMediaQuery } from "react-responsive";

import NavigationListSmall from "./NavigationListSmall";
import NavigationListBig from "./NavigationListBig";

import logo from "../../public/logo.svg";
import iconClosedWhite from "../../public/iconHamburgerMenuClosedWhite.svg";
import iconClosed from "../../public/iconHamburgerMenuClosed.svg";

const menuItems = [
  { name: "Home", id: "Home" },
  { name: "Why Rubinowe", id: "Why Rubinowe" },
  { name: "About us", id: "About us" },
  { name: "Contact", id: "Contact" },
];


const Navigation = () => {
  // useEffect(()=>{console.log(iconClosed)},[])

  const [isOpen, setIsOpen] = useState(false);
  const [iconMenu, setIconMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [addShadow, setAddShadow] = useState(false);

  const modificationMenuSize = useMediaQuery({ query: "(min-width: 992px)" });

  const changeMenu = () => {
    setIsOpen(!isOpen);
    setIconMenu(!iconMenu);
  };

  const resetMenu = () => {
    setIsOpen(false);
    setIconMenu(false);
  };

  const moveScroll = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      setAddShadow(true);
    } else setAddShadow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", moveScroll);
    return () => window.removeEventListener("scroll", moveScroll);
  }, [scrollY, addShadow]);

  useEffect(() => {
    resetMenu();
  }, [modificationMenuSize]);

  return (
    <WrappNavigationShadow addShadow={addShadow}>
      <WrappNavigation>
        <WrappLogo addShadow={addShadow}>
          <WrappLogoLink href={`#Home`}>
           <Logo src={logo.src} alt={"logo"} />
          </WrappLogoLink>
        </WrappLogo>

        {!modificationMenuSize && addShadow === true ? (
          <WrapIcon>
            <ToggleMenuButton onClick={changeMenu}>
              <img src={iconClosed.src} alt={"menu"} />
            </ToggleMenuButton>
          </WrapIcon>
        ) : null}

        {!modificationMenuSize && addShadow === false ? (
          <WrapIcon>
            <ToggleMenuButton onClick={changeMenu}>
              <img src={iconClosedWhite.src} alt={"menu"} />
            </ToggleMenuButton>
          </WrapIcon>
        ) : null}

        {isOpen && !modificationMenuSize ? (
          <NavigationListSmall menuItems={menuItems} changeMenu={changeMenu} />
        ) : null}
        {modificationMenuSize && (
          <NavigationListBig menuItems={menuItems} addShadow={addShadow} />
        )}
      </WrappNavigation>
    </WrappNavigationShadow>
  );
};

export default Navigation;

const NavigationBasicStyle = styled.aside`
  height: 62px;
  width: 100%;
  position: fixed;
  top: 33px;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  //border: 2px solid green;
`;

const WrappNavigationShadow = styled(NavigationBasicStyle)`
  ${({ theme, addShadow }) => css`
    position: ${addShadow ? "fixed" : "relative"};
    margin-bottom: ${addShadow ? "0" : "-82px"};
    background: ${addShadow ? theme.colors.colorSmallMenu : "transparent"};
    box-shadow: ${addShadow ? theme.shadows.shadowGrey : "none"};
    top: ${addShadow ? 0 : "33px"};
   `};
`;

const WrappNavigation = styled.div`
  height: 62px;
  align-self: center;
  width: 100%;
  max-width: 1800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //border: red 2px solid;
`;

const WrappLogo = styled.div`
  ${({ addShadow }) => `
    ${
    addShadow
        ? css`
            img {
              margin-top: -15px;
              height: 50px;
            }
          `
        : css`
            img {
              margin-top: -20px;
              height: 80px;
            }
          `
}
  `};
  height: 60px;
  width: 265px;
  margin-left: 30px;
  padding-top: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  //border: chartreuse 2px solid;
`;

const WrappLogoLink = styled.a`
  display: block;
  cursor: pointer;
`

const Logo = styled.img`
  height: 100%;
`;

const WrapIcon = styled.div`
  height: 45px;
  width: 45px;
  margin-right: 30px;
  text-align: right;
  //border: gold 2px solid;
`;
const ToggleMenuButton = styled.button`
  height: 40px;
  width: 40px;
  //border: pink 2px solid;
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 32px;
  color: ${(props) => props.theme.colors.colorPrimary};
`;

