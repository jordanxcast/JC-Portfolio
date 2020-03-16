import React from 'react';
import { Link } from 'react-router-dom'

function Menu(props){
  return(
    <>
      <Link>
        Home
      </Link>

      <Link>
        About
      </Link>

      <Link>
        Projects
      </Link>

      <Link>
        Experience
      </Link>

      <Link>
        Contact
      </Link>
      
      <Link>
        Lifecycle
      </Link>
    </>
  );
}

export default Menu;