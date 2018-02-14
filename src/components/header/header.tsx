import * as React from 'react';
import styled from 'styled-components';
import Headline from "./headline";

interface HeaderProps {
    text: string;
    logo: string;
    backgroundImg: string;
}

const Header = ({text, logo, backgroundImg}: HeaderProps) => {

    const Wrapper = styled.header`
      box-sizing: border-box;
      position: relative;
      background-image: url(${backgroundImg});
      background-repeat:no-repeat;
      background-color: black;
      background-size:contain;
      background-position:center;
      border: 5px solid black;
      max-width: 320px;
      height: 180px;
      
      @media (max-width: 320px) {
          max-width: 100%;
      }
    `;

    return (
        <Wrapper>
            <Headline logo={logo} text={text}/>
        </Wrapper>
    );
};
export default Header;
