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
                <Counter param1={2} param2={4} param3={6} defaultparam1 ={8}/>
                <hr/>
                <Counter param2={6} param3={9} defaultParam1={12}>
                    شمارنده ی چیلدرن!!
                </Counter>
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
