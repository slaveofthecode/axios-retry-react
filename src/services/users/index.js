import { getRequest } from '../axios-client/verbs';
import { mapperAllUsers } from './mapper';
import resultAllUsers from './mocks/all.json';

export const getUsers = () => {

    // return callUsingMockData();
    return callWithSeveralTries();
};

function callUsingMockData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const allUsers = mapperAllUsers(resultAllUsers);
            resolve(allUsers);
        }, 3000);
    });
}

async function callWithSeveralTries() {

    

    const result = await getRequest('users');
    const allUsers = mapperAllUsers(resultAllUsers);
    return allUsers;
}