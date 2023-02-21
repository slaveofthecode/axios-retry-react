export function UserList({users}){
    const hasUsers = users.length > 0; 

    return (
      hasUsers ? <UserListTable users={users} /> : <p>No users</p>
    )    
}


function UserListTable({users}){
  return (
    <>
        <p>Total rows: {users.length}</p>
        <ul>
            {
              users.map((user) => (
                <li key={user.id}>{user.name} <em>{ user.email }</em> </li>
              ))
            }
        </ul>
    </>
);
}