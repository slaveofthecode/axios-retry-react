import React from 'react'
import Counter from './Counter'

export const ExampleUseCallback = () => {

    const [counter, setCounter] = React.useState(0);

    // ❌ #1 : don't use this
    // const increment = () => {        
    //     setCounter(counter + 1);
    // };

    // ✅ #2 : use this
    const increment = React.useCallback(() => {        
        setCounter(prevCounter => prevCounter + 1);
    }, []);

    return (
        <>
            <h2>
                <a href='https://beta.reactjs.org/reference/react/useCallback' target='__blank' className='link-secondary text-decoration-none font-monospace letter-spacing-5' >useCallback</a>
            </h2>
            <ul>
                <li> useCallback is a hook that will return a memoized version of the callback that only changes if one of the dependencies has changed. </li>
                <li> useCallback(fn, deps) is equivalent to useMemo(() ={'>'} fn, deps). </li>
            </ul>
            {/* <p>
                <br />Memoriza una funcion para no volverla a definir en cada renderizado.
                <br />Usalo solo siempre que se pase una funcion como prop a un componente hijo.
                <br />Usalo siempre que se pase una funcion como parametro a un useEffect.
            </p> */}
            <hr />
            <div className='p-3'>
                <Counter counter={counter} increment={increment} />
            </div>
        </>
    );
}
