import React, { useRef, useState } from 'react'
import styled from 'styled-components'

const Billboard = ({data}) => {
    const slider = useRef();

    let w = 100/data.length;
    const [len,setLen] = useState(w);
    const click = () => {
        // left
        setLen(len+w);
        slider.current.style.transform=`translateX(-${len}%)`
    }
    
  return (
    <BillboardContainer>
        <Slider>
        <div className="slide" ref={slider} style={{width: data.length*100+"%"}}>
        {
            data && data.map((item,i)=>{
                return(
                    <div className='slide__item' width="100%">
                        <img className={'billboard_image'+i} alt={"Billboard "+i} key={"Billboard "+i} src={item}></img>
                    </div>
                );
            })
        }
        </div>
        <button onClick={click}> CLICK</button>
        </Slider>
    </BillboardContainer>
  )
}


const BillboardContainer = styled.div`
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0));
    position: relative;
    z-index: -1;
    margin-bottom: -150px;
`;

const Slider = styled.div`
    /* Slider */
position: relative;
width: 100%;
border-radius: 5px;   
transition: all 1s;
overflow: hidden;

.slide {
 display: flex;
 transition: all 1s;
}

.slide__item > img {
    width: 100%;
    object-fit: contain;
}

`;



export default Billboard