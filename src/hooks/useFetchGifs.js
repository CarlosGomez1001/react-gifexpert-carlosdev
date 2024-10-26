
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  

    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages( newImages );
        setIsLoading( false );
        // console.log(newImages)
    }

    useEffect( () => {    // useEffect hace que no se re renderize el componente cada que existe algun cambio 
        getImages();
    }, [] )

    return {
        images,
        isLoading
    }
}
