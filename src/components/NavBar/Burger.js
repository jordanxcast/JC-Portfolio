import React, { useState } from 'react';
import Menu from './Menu'

function Burger(props){
   const [ menu, setMenu ] = useState(false);
  return (
    <>
      <button onClick={() => setMenu(!menu)}>Menu</button>
      {menu && <Menu />}
    </>
  );
}

export default Burger;