/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

export const FatComponent = ({ text, value }) => {

    console.group('Child Component : useMemo');
    console.log(`For text: ${text}`);
    console.log('This will be called only once!');
    console.groupEnd();
    
    return (
        <>
            <div>{ text } <strong>{ value }</strong> </div>            
        </>
    )
};
