import axios from 'axios';
import { mapperAllUsers } from './mappers';
import usersMock from './mocks/users.json';

export const getUsers = async () => {

    const { data: allUsers } = await axios.get('https://jsonplaceholder.typicode.com/users'); // Real data
    // const { data: allUsers } = await Promise.resolve({ data: usersMock }); // Mock data
    
    const dataMapped = mapperAllUsers(allUsers);

    return dataMapped;
};

export const getUser = async (id) => {
    const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

    const dataMapped = mapperAllUsers([user]);

    return dataMapped;
};