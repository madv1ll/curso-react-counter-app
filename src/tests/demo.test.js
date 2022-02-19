describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deben de ser iguales los string', () => { 
        // 1. Inicializacion
        const mensaje = 'Hola mundo';
        
        //estimulo
        const mensaje2 = `Hola mundo`;
    
        //Observar comportamiento
        expect( mensaje ).toBe( mensaje2 )
     });
})

