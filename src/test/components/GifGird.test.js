import React from 'react';
import '@testing-library/jest-dom'
import {GifGird} from '../../components/GifGird'
import { shallow } from 'enzyme';
import { useFerchGifs } from '../../hooks/useFerchGifs';
jest.mock('../../hooks/useFerchGifs');

describe('pruebas en <GifGird/>', () => {

    const category = 'One Punch';
    //const wrapper = shallow (<GifGird category = { category }/>)

    test('debe mostrar correctamente ', () => {

        useFerchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGird category={category}/>);
        expect(wrapper).toMatchSnapshot(); 

    });

    test('debe de mostrar items cuando se cargan las imagenes <useFerchGifs/>  ', () => {

        const gifs = [{

            id: '123',
            url: 'https://HolaMundo.cl',
            title: 'Hola Mundo'

        }]

        useFerchGifs.mockReturnValue({
            
            data: gifs,
            loading: false

        });

        const wrapper = shallow(<GifGird category={category}/>);
        
        //expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe( gifs.length );
    })
    
  
})



