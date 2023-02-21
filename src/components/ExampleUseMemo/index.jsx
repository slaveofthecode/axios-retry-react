import React from 'react'
import { Counter } from './Counter'

export const ExampleUseMemo = () => {
    return (
        <>
            <h2>
                <a href='https://beta.reactjs.org/reference/react/useMemo' target='__blank' className='link-secondary text-decoration-none font-monospace letter-spacing-5' >useMemo</a>
            </h2>
            <ul>
                <li> useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed. </li>
                <li> This optimization helps to avoid expensive calculations on every render. </li>
                <li> Remember that the function passed to useMemo runs during rendering. Don't do anything there that you wouldn't normally do while rendering. For example, side effects belong in useEffect, not useMemo. </li>
                <li> If no array is provided, a new value will be computed on every render. </li>                
            </ul>
            {/* <p>
                <br />Se encarga de memorizar un valor para no volver a calcularlo en cada renderizado.
                <br />Usalo solo siempre que se pase un valor como prop a un componente hijo.
                <br />Usalo siempre que se pase un valor como parametro a un useEffect.
                <br />Usalo siempre que se pase un valor como parametro a un useCallback.
                <br />Usalo siempre que se pase un valor como parametro a un useMemo.
            </p> */}
            <hr />
            <div className='p-3'>
                <Counter />                
            </div>
        </>
    );
}
