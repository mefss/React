import { render } from '@testing-library/react';
import { Component } from 'react';
import Counter from './components/Counter';

import './Session27.css'

class Session27 extends Component {
    render() {
        return (
            <div className='session27' >
                <h1>
                    شمارنده ی کلاسی من
                </h1>
                <Counter num1={6} num2={10} num3={15}/>
            </div>
        )
    }
}

// const Session27 = () => {
//     return (
//         <div className='session27'>
//             <h1>
//                 شمارنده ی تابعی من
//             </h1>
//             <Counter />
//         </div>
//     )
// }

export default Session27;
