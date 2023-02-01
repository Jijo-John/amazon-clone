import React from 'react'
import styled from 'styled-components';
import Billboard from './Billboard';

import HomeFeed from '../assets/HomeFeed';

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
                return (
                  <FluidCardGrid head={item.head} data={item.items} />
                )
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 10px;
      margin: auto;
      width: 95%;
    }

    /*Here Desktop Based Css to work below styles*/
    //Mobile devices
    @media screen and (max-width: 480px){
      .card-layout {
        grid-template-columns: 1fr 1fr;
      }
    }
    //iPads, Tablets
    @media screen and (max-width: 768px){
      .card-layout {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
    //Small screens, laptops
    @media screen and (max-width: 1024px){}
    //Desktops, large screens
    @media screen and (max-width: 1200px){}
 `;

export default Home