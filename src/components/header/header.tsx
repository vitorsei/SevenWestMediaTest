import * as React from 'react';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';
import Headline from "./headline";

interface HeaderProps {
    text: string;
    logo: string;
    backgroundImg: string;
}

const Header = ({text, logo, backgroundImg}: HeaderProps) => {
    return (
        <Wrapper backgroundImg={backgroundImg}>
            <Headline logo={logo} text={text}/>
        </Wrapper>
    );
};

interface MyImageProps {
    backgroundImg: string;
}

const Wrapper = styledTS<MyImageProps>(styled.header) `
   box-sizing: border-box;
   position: relative;
   background-image: url(${props => props.backgroundImg});
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

export default Header;
