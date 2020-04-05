import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constant_styles'

const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem,;
  height: 2.2em;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-left: 10px;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.1em;
    background: ${colors.offwhite};
    border-radius: 1px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child{
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      background: ${({open}) => open ? colors.teal : colors.offwhite}
    }

    :nth-child(2){
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3){
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      background: ${({open}) => open ? colors.teal : colors.offwhite}
    }
  }

  @media screen and (min-width: 768px) { 
    display: none;
  }
`;

const Burger = (props) =>{
  return (
    <StyledBurger open={props.open} >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
}

export default Burger;