import { useState } from 'react';
import PropTypes from 'prop-types';
import '../style.css';

const Counter = ({ inc, dec, res, count }) => {
    return (
        <div>
            {/* <h1 style={{ color: count == 0 ? 'blue' : count > 0 ? 'green' : 'red' }}>
                {count}
            </h1> */}
            <h1 style={count == 0 ? { color: 'blue' } : count > 0 ? { color: 'green' } : { color: 'red' }}>
                {count}
            </h1>
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
            <br />
            <br />
            <button onClick={res}>RESET</button>
        </div>
    )
}

Counter.propTypes = {
    inc: PropTypes.func,
    dec: PropTypes.func,
    res: PropTypes.func,
    count: PropTypes.number
}

export default Counter;