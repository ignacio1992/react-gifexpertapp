import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGird } from './components/GifGird';

//forma basica de creacion de componentes
export const GifExpertApp = () => {

    //const categories =['One Punch',' Samuria X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch','pokemon']);

    //const handleAdd = ()=>{
        
        //setCategories ( [...categories, 'HunterXHunter'] ); //forma de agregar contenido a un arreglo
        // al poner el arreglo de esta manera: ( ['HunterXHunter'], ...categories ); HunterXHunter quedaria primo
        //y el contenido original del arreglo le seguiria
        
        //otra forma
        // setCategories(anime =>[...anime,'HunterXhunter']);// recuerda bien los 3 puntos
        //estos agregan contenido a un arreglo. pinche pelotudo.
   // }

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <hr/>
        <ol>
             {
                 categories.map( category => 
                   // <li key= {category} > {category} </li>
                   <GifGird  key = {category}
                   category = { category }/> 
                )
             }
        </ol>
        </>
    )
}



