import React from 'react'
import styled from 'styled-components';
import Billboard from './Billboard';

import products from '../amazonproducts.json'

const Home = () => {
  const billboard = 
  ["https://m.media-amazon.com/images/I/61s-hhcpcaL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cYZuUMEDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71+ddQwJCBL._SX3000_.jpg"
  ];

  console.log(products)
    
  return (
    <HomeContainer>
        <Billboard className="billboard" data={billboard}/>
        <div className="card-layout">
          
        </div>
    </HomeContainer>
  )
}

 const HomeContainer = styled.div`
    position: relative;
    .card-layout {
      z-index: 5;
      height: 900px;
    }
 `;

export default Home