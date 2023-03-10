import { useState } from 'react';
import { getRequest } from '../services/axios-client/verbs';

export function useUsers() {

    const [users, setUsers] = useState({
        data: [],
        loading: false,
        error: null        
    });

    function setLoading () {
        setUsers({
            data: [],
            loading: true,
            error: null
        });
    }
    function setData(data){
        setUsers({
            data: data,
            loading: false,
            error: null
        });
    }
    function setError (error){
        setUsers({
            data: [],
            loading: false,
            error: error
        });
    }

    const getAll = async () => {
        
        setLoading(true);

        try {            

            // const { data } = await getRequest('users');
            // setData(data);

            setTimeout(async () => {

                // try {
                //     const { data } = await getRequest('user');
                //     setData(data);
                // } catch (error) {
                //     console.log('error', error);
                //     setError(error);
                // }   

                const { data } = await getRequest('users--');
                setData(data);

            }, 3000);

        } catch (error) {
            console.log('error', error);
            setError(error);  
        } 
    };

    return { getAll, users };
}



