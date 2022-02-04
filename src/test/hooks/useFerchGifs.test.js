import { useFerchGifs } from '../../hooks/useFerchGifs';
import { renderHook} from '@testing-library/react-hooks'
//jest.setTimeout(10000);

describe('pruebas en el hook useFerchGifs', () => {
    
    test('debe de retornar el estado inicial ', async () => {
        
       const {result,waitForNextUpdate } = renderHook( () => useFerchGifs ( 'One Punch' ))  
       const {data, loading} = result.current;
       await waitForNextUpdate();
       //waitForNextUpdate({timeout:3000});

       //console.log(data, loading);

       expect( data ).toEqual([]);
       expect (loading).toBe(true);

    })

    test('debe de retornar un arreglo de imagenes y un loading en false ', async () => {
        
        const {result, waitForNextUpdate } = renderHook( () => useFerchGifs ( 'One Punch' ));     
        //waitForNextUpdate({timeout:3000});

        //await waitForNextUpdate(); debe de estar antes de:       const {data, loading} = result.current;
        //const {data, loading} = result.current;
        // de lo contrario esta prueba no funcionara dando como resultado:
        // data como (0) y loading como (true)
        await waitForNextUpdate();

        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect (loading).toBe(false);

    })
    
    

})
