import React from 'react'
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem'
import PropTypes from 'prop-types';


describe('pruebas en <GifGrindItem', () => {

        const title = 'un titulo';
        const url ='https://localhost/algo.jpg'
        const wrapper = shallow (  <GifGridItem title ={ title}  url ={ url}  />);    
       
        test('debe mostrar el componente correctamente ', () => {
            //no es necesaria debido a que ya existe el mismo elemento fuera..
            // const wrapper = shallow (<GifGridItem title ={ title} url ={ url} />);
            expect (wrapper).toMatchSnapshot();
    
        })

        test('debe de tener un párrafo con el title', () => {

            const p = wrapper.find('p');
            expect(p.text().trim()).toBe( title);
        })
        
        test('debe de tener la imagen igual al url y alt de los props ', () => {
            
                const img =wrapper.find('img');
                //console.log(img.prop('src')); 
        //podemos usar props para buscar varios elementos del objeto a la vez
        //ej console.log(img.props('src','titile'))
                expect(img.prop('src')).toBe(url);
                expect(img.prop('alt')).toBe(title);
                

        })
        

        test('debe de tener animate__bounceIn ', () => {
            
            const div = wrapper.find('div');
            const className = div.prop('className');

            expect( className.includes('animate__bounceIn') ).toBe(true);

        })
         
    
})

