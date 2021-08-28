import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    
    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
            setInputValue( e.target.value );
    }
    //permite agregar nuevos elementos al arreglo
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit hecho');
        
        if ( InputValue.trim().length >2 ) {
            setCategories(anime =>[InputValue,...anime] );
            setInputValue('');   
        }
    }
    
    return (
        
        <form onSubmit ={handleSubmit}>
            <input 
             type ='text'
             value={InputValue}
             onChange={handleInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
