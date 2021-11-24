import styled from 'styled-components'


const TextSmallDark = styled.p`
  font-size:  ${props => props.theme.fontSizes.fsTextSmall};
  font-weight: ${props => props.theme.fonts.fontBold};
  color:  ${props => props.theme.colors.colorText};
  line-height: 24px;
      `;

export default TextSmallDark;



