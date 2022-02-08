import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}

CounterApp.defaultProps = {
    value: 999,
}
export default CounterApp;