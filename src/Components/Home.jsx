import React from 'react'
import styled from 'styled-components';
import Billboard from './Billboard';

import HomeFeed from '../assets/HomeFeed';

import products from '../amazonproducts.json'
import FluidCard from './FluidCard';
import FluidCardGrid from './FluidCardGrid';

const Home = () => {
  const billboard = 
  ["https://m.media-amazon.com/images/I/61s-hhcpcaL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61cYZuUMEDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71+ddQwJCBL._SX3000_.jpg"
  ];

    
  return (
    <HomeContainer>
        <Billboard className="billboard" data={billboard}/>
        <div className="card-layout">
          {
            HomeFeed.map((item)=>{
              console.log(item)
              if(item.items.length>1){
                // return (
                //   <FluidCardGrid head={item.head} data={item.items} />
                // )
              }
              else {
                return (
                  <FluidCard head={item.head} data={item.items} />
                )
              }
            })
          }
        </div>
    </HomeContainer>
  )
}

 const HomeContainer = styled.div`
    position: relative;
    border: 1px solid;
    
    .card-layout {
      z-index: 5;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid;
      gap: 10px;
      margin: 0 auto;
      width: 95%;
    }
 `;

export default Home