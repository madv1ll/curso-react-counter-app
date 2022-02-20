import { getByText, render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => { 
    
    test('Debe de mostrar el mensaje "Hola, soy Koku"', () => { 

        const saludo = 'Hola, soy Koku';
        const { getByText } = render( <PrimeraApp saludo={ saludo }/>);

        expect( getByText( saludo ) ).toBeInTheDocument();
     });

 });