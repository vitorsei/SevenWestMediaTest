import * as React from 'react';
import styled from 'styled-components';

interface HeaderProps {
}

const Header = (props: HeaderProps) => {
    return (
        <Wrapper>

        </Wrapper>
    );
};

const Wrapper = styled.header`
  box-sizing: border-box;
  background-image: url(https://res.cloudinary.com/dbsfkfmbd/image/upload/q_auto,f_auto/tile.jpg);
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  max-width: 100%;
  height: 180px;
`;

export default Header;
