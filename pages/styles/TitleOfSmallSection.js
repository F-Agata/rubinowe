import styled from 'styled-components'


const TitleOfSmallSection = styled.h2`
  font-size:  ${props => props.theme.fontSizes.fsTitleSmall};
  font-weight: ${props => props.theme.fonts.fontBold};
  color:  ${props => props.theme.colors.colorTitle};
  line-height: 30px;
      `;

export default TitleOfSmallSection;

