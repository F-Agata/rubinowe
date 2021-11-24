import styled from 'styled-components'


const TitleOfPages = styled.h2`
  font-size:  ${props => props.theme.fontSizes.fsTitleBig};
  font-weight: ${props => props.theme.fonts.fontMedium};
  color:  ${props => props.theme.colors.colorTitle};
  line-height: 122%;
      `;

export default TitleOfPages;

