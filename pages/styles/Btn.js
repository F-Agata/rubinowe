import styled from 'styled-components'

const Btn = styled.button`
  height: 61px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  border-radius: 60px;
  border: none;
  background: ${props => props.theme.colors.colorPrimary};
  
  
  font-weight: ${props => props.theme.fonts.fontBold};
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.colors.colorSecondary};
 
`;

export default Btn;
