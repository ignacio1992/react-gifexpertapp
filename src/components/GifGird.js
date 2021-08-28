import React,{ } from 'react'
import { useFerchGifs } from '../hooks/useFerchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGird = ({category}) => {

    const {data:images,loading} = useFerchGifs(category);

    return (
        <>
        <h3 className='animate__animated animate__fadeIn' > { category}</h3>

            { loading && <p className= 'animate__animated animate__flash'>loading...</p>}

        {<div className ='Card-grid'>
            
                {
                    images.map((img ) =>(
                        <GifGridItem
                         key= {img.id}
                         { ...img }
                         />
                    ))
                }
            </div>}
        </>
    )
}
