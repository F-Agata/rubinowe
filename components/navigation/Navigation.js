import React, {useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import NavigationListSmall from './NavigationListSmall'
import NavigationListBig from './NavigationListBig'

import logo from '../../public/logo.svg'
import iconClosedWhite from '../../public/iconHamburgerMenuClosedWhite.svg'

const menuItems = [
    {name: "Hello",
        id: "menu1",},
    {name: "O mnie",
        id: "menu2",},
    {name: "Projekty",
        id: "menu3",},
    {name: "Kontakt",
        id: "menu4",}]

const NavigationBasicStyle = styled.aside`
  height: 62px;
  width: 100%;
  position: fixed;
  top: 33px;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
  //border: 2px solid chartreuse;  
`

const WrappNavigation = styled.div`
  height: 62px;
  align-self: center;
  width: 100%;
  max-width: 1800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //  @media (min-width: 992px) {
  //  padding: 0px 60px
  //}
`

const WrappLogo = styled.div`
  ${({ addShadow })=>`
    ${ addShadow ? css`
      img {
          margin-top: -15px;
          height: 60px;
      }
    ` : css`
      img {
        margin-top: -20px;
        height: 80px;
      }
    `}
  `};
  height: 60px;
  margin-left: 30px;
  padding-top: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  `

const Logo = styled.img`
  height: 100%;`

const WrapIcon = styled.div`
  height: 45px;
  width: 45px;
  margin-right: 30px;
  text-align: right;
  //border: gold 2px solid;
  `
const ToggleMenuButton = styled.button`
  height: 40px;
  width: 40px;
  //border: pink 2px solid;
  background: transparent;
  cursor: pointer;
  border: none;
  font-size: 32px;
  color:  ${props => props.theme.colors.colorPrimary};
`

const Navigation = () => {

    // useEffect(()=>{console.log(iconClosed)},[])

    const [isOpen, setIsOpen] = useState(false);
    const [iconMenu, setIconMenu] = useState(false);
    const [scrollY, setScrollY] = useState(0)
    const [addShadow, setAddShadow] = useState(false)

    const modificationMenuSize = useMediaQuery({query: '(min-width: 992px)' })

    const changeMenu = () => {
        setIsOpen (!isOpen);
        setIconMenu (!iconMenu);
    };

    const resetMenu = () => {
        setIsOpen (false);
        setIconMenu (false);
    };

    const moveScroll = () => {
        setScrollY(window.pageYOffset)
        if (scrollY > 100) {
            setAddShadow(true)
        } else setAddShadow(false);

    }

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
                    <Logo src={logo.src} alt={"logo"}/>
                </WrappLogo>
                { modificationMenuSize ? null :
                    <WrapIcon>
                        <ToggleMenuButton onClick={changeMenu}>
                            <img src={iconClosedWhite.src} alt={"menu"}/>
                        </ToggleMenuButton>
                    </WrapIcon>
                }
                { isOpen && !modificationMenuSize ?
                    <NavigationListSmall menuItems={menuItems} changeMenu={changeMenu} /> : null}
                {modificationMenuSize &&
                <NavigationListBig menuItems={menuItems} addShadow={addShadow}/>
                }

            </WrappNavigation>
        </WrappNavigationShadow>
    )
}

const WrappNavigationShadow = styled(NavigationBasicStyle)`
  ${({theme, addShadow})=>`
    background: ${addShadow ? theme.colors.colorSmallMenu : 'transparent'};
    box-shadow: ${addShadow ? theme.shadows.shadowGrey : 'none'};
    ${addShadow ? css`top: 0;` : null}
   `};
`

export default Navigation;