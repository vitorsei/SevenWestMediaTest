import * as React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    text: string;
    logo: string;
}

const Headline = ({text, logo}: HeaderProps) => {
    return (
        <Wrapper>
            <Img src={logo}/>
            <div>
                {text}
            </div>
        </Wrapper>
    );
};

const Img = styled.img`
   height: 70%;
   margin-right: 10px;
`;

const Wrapper = styled.div`
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

export default Headline;
