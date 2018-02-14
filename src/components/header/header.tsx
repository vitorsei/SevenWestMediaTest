import * as React from 'react';
import styled from 'styled-components';
import Headline from "./headline";

interface HeaderProps {
    text: string;
    logo: string;
}

const Header = ({text, logo}: HeaderProps) => {
    return (
        <Wrapper>
           <Headline logo={logo} text={text}/>
        </Wrapper>
    );
};

const Wrapper = styled.header`
  box-sizing: border-box;
  position: relative;
  background-image: url(https://res.cloudinary.com/dbsfkfmbd/image/upload/q_auto,f_auto/tile.jpg);
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
