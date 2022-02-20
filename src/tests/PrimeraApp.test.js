import PrimeraApp from "../PrimeraApp";
import { shallow }from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => { 
    
    // test('Debe de mostrar el mensaje "Hola, soy Koku"', () => { 
    //     const saludo = 'Hola, soy Koku';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/>);
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    //  });

    test('Debe de mostrar <PrimeraApp /> correctamente', () => { 
        const saludo = 'Hola, soy Koku';
        const wrapper = shallow(<PrimeraApp saludo={ saludo } />);

        expect( wrapper ).toMatchSnapshot();
     })
 });