import React from 'react';
import { PageTitle } from '../../components/PageTitle/PageTitle'

function Lifecycle(props) {
  return(
    <>
     <PageTitle>
       Portfolio Lifecycle
     </PageTitle>

      <section className='Portfolio_LC Assumptions'> 
        <div className='Portfolio_LC_subhead'>
          Assumptions
        </div>
        <div>
          <p>Assumption 1</p>
          <p>Assumption 2</p>
          <p>Assumption 3</p>
          <p>Assumption 4</p>
          <p>Assumption 5</p>
        </div>
      </section>

      <section className='Portfolio_LC Wireframes'> 
        <div className='Portfolio_LC_subhead'>
          Wireframes
        </div>

        <div className='Portfolio_LC_images'>
          <img src='' alt=''/>
          <img src='' alt=''/>
          <img src='' alt=''/>
          <img src='' alt=''/>
          <img src='' alt=''/>
        </div>
      </section>

    </>
  );
}

export default Lifecycle;