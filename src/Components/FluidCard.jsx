import React, { useState } from 'react'
import styled from 'styled-components'

const FluidCard = ({ head, data }) => {
    
    return (
        <Container>
            <div className='container'>
                <h3 className='heading'>{head}</h3>
                <div className='img-container'>
            {data && data.map(({title,image})=>{
                    return(
                        <div className='item'>
                            <img src={image} alt={title}/>
                        </div>
                    )
            })}
            </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    .container {
        background-color: #ffffff;
        width: 309px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        border: 1px solid;
    }
    .container > .heading {
        width: 100%;
    }
    .container > .img-container {
        height: 300px;
    }
`;

export default FluidCard