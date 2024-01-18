import React from 'react';
import logo from '../../assets/game-logo.png'
import { HeaderWrapper, 
        Img, 
        Title 
} from './styled';

export const Header = () => {
  return (
    <HeaderWrapper>
       <Img src={logo} alt='logo'/> 
       <Title>TIC-TAC-TOE</Title>
    </HeaderWrapper>
  )
}
