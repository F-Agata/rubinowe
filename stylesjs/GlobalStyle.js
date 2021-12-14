import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
  
      body {
        background: white;
      }
      
      input {
        outline: none;
        box-sizing: border-box !important;
      }
      
      textarea {
        outline: none;
        box-sizing: border-box !important;
      }
`;
export default GlobalStyle;
