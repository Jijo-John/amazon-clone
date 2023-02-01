import React from 'react'
import styled from 'styled-components'

const FluidCard = ({ head, data }) => {
    
    return (
        <Container>
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
        </Container>
    )
}

const Container = styled.div`
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 1px dashed; */
        padding: 10px;
        background-color: white;

        /* flex: 1 0 21%; */
    .img-container {
        overflow: hidden;
    }
    .img-container > .item {
        /* border: 1px dotted red; */
        overflow: hidden;
    }
`;

export default FluidCard