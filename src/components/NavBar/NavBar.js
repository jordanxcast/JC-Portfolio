import React from 'react';
import { colors } from '../../constant_styles'

import Burger from './Burger'

function NavBar(props){
 
  return (
    <>
      <nav style={{width: '-webkit-fill-available', padding:'20px 20px', backgroundColor: colors.black, color: colors.mint, opacity: '90%', boxShadow: '0px 4px 6px #000000', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', fontSize:'1.2em', position: 'absolute', zIndex: '20'}}>
        <div>
          JC
        </div>
        
        
        <Burger/>
       

      </nav>
    </>
  );
}

export default NavBar;