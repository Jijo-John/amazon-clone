import React from 'react'
import styled from 'styled-components';

const FluidCardGrid = ({head,data}) => {
    return (
        <Container>
            <div className='container'>
            <h3 className='heading'>{head}</h3>
            <div className="fluid_card">
                {data && data.map(({title,image})=>{
                    return(
                        <div className='item'>
                            <img src={image} alt={title}/>
                            <p>{title}</p>
                        </div>
                    )
                })}
            </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
    .container {
        border: 1px solid red;
    }
    .fluid_card {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .fluid_card > .item {
        width: 90%;
        overflow: hidden;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }
    .fluid_card > .item > img {
        display: block;
        width: 100%;
        margin: 0 auto;
        object-fit: contain;
        
    }
`;

export default FluidCardGrid