import styled from 'styled-components'


const TitleVerySmall = styled.h3`
  font-size:  ${props => props.theme.fontSizes.fsTitleVerySmall};
  font-weight: ${props => props.theme.fonts.fontBold};
  color:  ${props => props.theme.colors.colorTitleVerySmall};
  line-height: 122%;
  opacity: 0.5;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: left;    
      `;

export default TitleVerySmall;

