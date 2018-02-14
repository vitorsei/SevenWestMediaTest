import * as React from "react";
import styled from 'styled-components';
import Header from "./components/header";

class App extends React.Component<any, any> {
    render() {
        return (
            <Block>
                <Header>
                </Header>
            </Block>
        );
    }
}

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
