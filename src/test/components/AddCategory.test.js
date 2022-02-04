
import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import React from "react";
import { AddCategory } from "../../components/AddCategory";

describe('pruebas en <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow (<AddCategory setCategories={ setCategories }/>);


    beforeEach(()=>{
        jest.clearAllMocks();
        wrapper = shallow (<AddCategory setCategories={ setCategories }/>);
    })

    test('debe mostrarse correctamente ', () => {
        
        expect (wrapper).toMatchSnapshot();

    })

    test ('debe de cambiar la caja de texto', ()=>{

        const input = wrapper.find('input');
        const value = 'hola mundo'

        input.simulate('change', { target:{ value } });


        expect(wrapper.find('p').text().trim()).toBe( value);

    })


    test('No debe de postear la información con submit', () => {
        
        wrapper.find('form').simulate('submit',{ 
            preventDefault(){} 
        });

        expect (setCategories).not.toHaveBeenCalled();

    })

    test('debe de llamar el setCategories y limpiar la caja de texto ', () => {
        

        const value ='hola mundo'
        
        //1. simular el inputChange
        wrapper.find('input').simulate('change',{target:{value}});
        //2. simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        //3. SetCatogories debe de ser llamado
        expect(setCategories).toHaveBeenCalled();
        //expect(setCategories).toHaveBeenCalledTimes(2); genera varias llamadas 
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));//evalua que sea funciones, es decir que no sean numeros

        //4. el valor del imput debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');


    })
    
    
    
})
