import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";
describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe retornar hola kevin', () => {
        const nombre = 'kevin';

        const saludo = getSaludo( nombre )

        expect(saludo).toBe('Hola ' + nombre + '!')
    })

    // getSaludo debe retornar hola Carlos! si no hay argumento nombre
    test('getSaludo debe retornar hola Carlos! si no hay argumento nombre', () => {

        const saludo = getSaludo( )

        expect(saludo).toBe('Hola Carlos!')
    })
})