import styled, { css } from "styled-components";

const Btn = styled.button`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  border-radius: 60px;
  border: none;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  ${({ theme }) => css`
    background: ${theme.colors.colorPrimary};
    font-weight: ${theme.fonts.fontBold};
    color: ${theme.colors.colorSecondary};
  `};
`;

export default Btn;
