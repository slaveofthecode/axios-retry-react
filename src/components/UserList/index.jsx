export function UserList({users}){
    return (
        <>
            <p>Total rows: {users.length}</p>
            <ul>
                {
                  users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                  ))
                }
            </ul>
        </>
    );
}