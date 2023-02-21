import { useState } from 'react';
import { getRequest } from '../services/axios-client/verbs';
import { getUsers } from '../services/users';

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
            const { data } = await getUsers();
            console.log('DATA', data);
            setData(data);
                        
        } catch (error) {
            console.log('THERE WAS AN ERROR', error);
            setError(error);  
        } 
    };

    return { getAll, users };
}



