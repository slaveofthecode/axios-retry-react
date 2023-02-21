import React from 'react'

export default function Counter ({counter, increment}) {

    // ❌ #1 : this useEffect is only used as test of useCallback
    React.useEffect(() => {
      console.group('Counter : useCallback');
      console.log('This will be called only once!');
      console.groupEnd();

    }, [increment]);

  return (
    <div>
        <span className='mx-3' > {counter} </span>
        <button type="button" class="btn btn-secondary" onClick={increment} >+</button>
    </div>
  )
}
