export const mapperAllUsers = (users) => { 
    return {
        data: users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            phoneNumber: user.phone,
            site: user.website,            
            address: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
        }))
    }
}