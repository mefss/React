import { Component } from 'react';
import Props from './components/Props';

import './style.css'

class MyProps extends Component {
    render() {
        return (
            <div className='center' >
                <h1>
                    پارامتر کلاسی من
                </h1>
                <Props param1={2} param2={4} param3={6} defaultparam1 ={8}/>
                <hr/>
                <Props param2={6} param3={9} defaultParam1={12}>
                پارامتر چیلدرن!!
                </Props>
            </div>
        )
    }
}

// const MyProps = () => {
//     return (
//         <div className='session27'>
//             <h1>
//                 پارامتر تابعی من
//             </h1>
//             <Counter />
//         </div>
//     )
// }

export default MyProps;
