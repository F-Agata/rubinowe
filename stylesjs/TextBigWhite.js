import styled from 'styled-components'


const TextBigWhite = styled.p`
  font-size:  ${props => props.theme.fontSizes.fsTextBig};
  font-weight: ${props => props.theme.fonts.fontRegular};
  color:  ${props => props.theme.colors.colorPrimary};
  line-height: 34px;
  opacity: 0.8;
  text-align: center;
      `;

export default TextBigWhite;

