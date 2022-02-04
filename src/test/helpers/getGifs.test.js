import {getGifs} from '../../helpers/getGifs';
describe('pruebas con <GetGifs/> Fecth', () => {
    
    test('debe de traer 10 elemento ', async() => {
        
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);


    })
    
    test('debe de traer 0 elemento', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe( 0 );


    })


})
