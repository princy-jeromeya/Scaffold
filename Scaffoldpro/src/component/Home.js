import React, { useState } from 'react';
import List from '../Reuse/List';
import Footer from '../Reuse/Footer'
import HomeCarousel from './HomeCarousel'
import Cards from './Cards'
import Carts from './Carts'
import AllDataScaffoldcontext from '../ScaffoldContexts/AllDataContext';
function Home() {


 
  return (
    <div>
      <List />
      <HomeCarousel />
      <div className='homeContent' style={{ display: "flex", width: "20" }}>
        <div>
          <Cards  />
        </div>
        <div className='checkcard' >
          {/* <Carts /> */}
        </div>
      </div>
      <Footer/>


    </div>
  );
}

export default Home;
