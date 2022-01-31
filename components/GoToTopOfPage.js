import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

import arrow from "../public/iconUpArrow.svg";

const GoToTopOfPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleArrow = () => {
    setScrollY(window.pageYOffset);
    if (scrollY > 100) {
      setShowArrow(true);
    } else setShowArrow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleArrow);
    return () => window.removeEventListener("scroll", toggleArrow);
  }, [scrollY, showArrow]);

  return (
    <>
      {showArrow ? (
        <WrappGoToTopOfPage onClick={scrollTop}>
          <BackgraundButtonArrow />
          <WrappArrow>
            <Image src={arrow.src} alt="do góry" layout="fill" />
          </WrappArrow>
        </WrappGoToTopOfPage>
      ) : null}
    </>
  );
};

export default GoToTopOfPage;
const WrappGoToTopOfPage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgb(0 0 0 / 10%);
  position: fixed;
  bottom: 30px;
  right: 30px;
  border: 1px solid ${(props) => props.theme.colors.colorSecondary};
  cursor: pointer;
  z-index: 10;
  overflow: hidden;
  background-color: transparent;
`;

const BackgraundButtonArrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.gradients.gradientBox};
  opacity: 50%;
  //border: red 2px solid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
`;

const WrappArrow = styled.div`
  width: 24px;
  height: 24px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
`;

