
import PropTypes from 'prop-types';

const PrimeraApp = ({saludo, subtitulo}) => {

    return(
        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </>
        );

}
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
    otra: PropTypes.number
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo por defecto',
    saludo: "Tíulo por defecto"
}

export default PrimeraApp;