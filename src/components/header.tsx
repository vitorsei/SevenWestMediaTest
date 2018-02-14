import * as React from 'react';
import styled from 'styled-components';

interface HeaderProps {
}

const Header = (props: HeaderProps) => {
    return (
        <Wrapper>
            <Bottom>
                <Img src="http://res.cloudinary.com/dbsfkfmbd/image/upload/q_auto,f_auto/logo.png"/>
                <div>
                    Home and Away
                </div>
            </Bottom>
        </Wrapper>
    );
};

const Img = styled.img`
   height: 70%;
   margin-right: 10px;
`;

const Wrapper = styled.header`
  box-sizing: border-box;
  position: relative;
  background-image: url(https://res.cloudinary.com/dbsfkfmbd/image/upload/q_auto,f_auto/tile.jpg);
  background-repeat:no-repeat;
  background-color: black;
  background-size:contain;
  background-position:center;
  border: 5px solid black;
  max-width: 638px;
  height: 360px;
  
  @media (max-width: 320px) {
      max-width: 100%;
      height: 180px;
  }
`;

const Bottom = styled.div`
  position: absolute;
  height: 30%;
  width: 100%;
  background: black;
  bottom:0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  color: white;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
`;

export default Header;
