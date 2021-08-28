
import { useEffect, useState } from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFerchGifs = ( category ) => {
   
    const [state, setState] = useState({
        data:[],
        loading: true
    });

    useEffect( ()=>{

        getGifs( category )
            .then( imgs =>{
                setTimeout(()=>{
                    setState({
                        data:imgs,
                        loading: false
                    })

                },1500);

            })
       
     },[category]) 

    return state; // {dadta:[], loading : true};
}



