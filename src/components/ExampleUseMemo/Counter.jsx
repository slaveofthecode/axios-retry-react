/* eslint-disable react-hooks/exhaustive-deps */
import React, {useMemo} from 'react'
import { FatComponent } from './FatComponent'

export const Counter = () => {
    const [count, setCount] = React.useState(1);
    return (
        <div>
            <span className='mx-3' > {count} </span>
            <button type="button" className="btn btn-secondary" onClick={ () => setCount(count + 1) } >+</button>            
            {useMemo(()=> <FatComponent text='...will be renderized once time' value={count} />, [])}
            {useMemo(()=> <FatComponent text='...will be renderized each 10 times' value={count}/>, [(count % 10 === 0)])}
        </div>
    )
}
