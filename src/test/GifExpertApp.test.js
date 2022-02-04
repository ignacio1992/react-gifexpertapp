
import React from "react"
import { GifExpertApp } from "../GifExpertApp"
import '@testing-library/jest-dom';
import { shallow } from "enzyme";



describe('pruebas sobre el <GifExpertApp/>', () => {

  
    
    test('debe mostrar el contenido de <GifExpertApp/> ', () => {

    const wrapper = shallow (< GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
        
    })
    
    test('debe de motrar una lista de categorias ', () => {
        
        const categories = ['One Punch', 'HunterXHunter']
        const wrapper = shallow (< GifExpertApp defaultCategories ={ categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGird').length).toBe( categories.length );



    })
})


