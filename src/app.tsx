import * as React from "react";
import styled from 'styled-components';
import Header from "./components/header/header";

const App = () => {
    return (
        <Block>
            <Header text="Home and Away"
                    logo="http://res.cloudinary.com/dbsfkfmbd/image/upload/q_auto,f_auto/logo.png">
            </Header>
        </Block>
    );
};

// Create a Title component that'll render an <h1> tag with some styles
const Block = styled.div`
  height: 100vh;
  background: #1c1c1c;
  padding: 5%;
  
  @media (max-width: 320px) {
      padding:0;
  }
`;

export default App;
