import styled from "styled-components";

const TitleVerySmallWhite = styled.h5`
  font-size: ${(props) => props.theme.fontSizes.fsTitleVerySmall};
  font-weight: ${(props) => props.theme.fonts.fontBold};
  color: ${(props) => props.theme.colors.colorPrimary};
  line-height: 122%;
  opacity: 0.5;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-align: center;
`;

export default TitleVerySmallWhite;
