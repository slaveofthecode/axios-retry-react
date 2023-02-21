import { useUsers } from "./hooks/useUsers";
import { UserList } from "./components/UserList";
import Loading from "./components/common/Loading";
import Alert from "./components/common/Alert";

export default function App() {
  
  const { getAll, users  } = useUsers();

  const handleClick = () => {
    getAll();
  }

  return (
    <>
      <main>
        <h1> Test AXIOS retry </h1>
        <hr />

        <h2>Get all Users </h2>
        <input type="button" value="Try 😎" onClick={handleClick} />
        <br />

        { users.loading && <Loading /> }
        { users.error && <Alert message={users.error.message} /> }
        { users.data && <UserList users={users.data} /> }

        <p>
          Token : { localStorage.getItem("token") }
          <br />
          Try : { localStorage.getItem("call-api-try")}
        </p>
      </main>
    </>
  );
}
