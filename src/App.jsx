import { useEffect, useState } from "react";
import { useUsers } from "./hooks/useUsers";
import { UserList } from "./components/UserList";
import Loading from "./components/common/Loading";
import Alert from "./components/common/Alert";

import { ExampleUseCallback } from "./components/ExampleUseCallback";
import { ExampleUseMemo } from "./components/ExampleUseMemo";



const initialData = {
  loading: false,
  error: null,
  data: null
};

export default function App() {
  
  const [ data, setData ] = useState(initialData);
  const { getAll, users, getById, user } = useUsers();  

  const handleClick = () => {
    getAll();
  }

  const handleClickById1 = () => {
    getById(1);
  }

  const handleClickById2 = () => {
    getById(2);
  }

  useEffect( () => {
    if(users){
      setData(users);
    } 

  },[users]);

  useEffect( () => {
    if(user){
      setData(user);
    }

  },[user]);


  return (
    <div className="container-fluid p-4 bg-black bg-gradient text-light vh-100">
     <header className="my-3" >
        <h1> React </h1>
     </header>
      <main>
        <hr />

        <div className="d-flex gap-3">
          <div className="card w-50 p-3 mb-5 bg-body-tertiary rounded bg-dark">
            <div className="card-body">
              <ExampleUseCallback />
            </div>
          </div>
          <div className="card w-50 p-3 mb-5 bg-body-tertiary rounded bg-dark" >
            <div className="card-body">
              <ExampleUseMemo />
            </div>
          </div>
        </div>
{/* 
        <h2>Users</h2>
        <div>
          <input type="text"  />
          <input type="button" value="Get by Id 1" onClick={handleClickById1} />
          <input type="button" value="Get by Id 2" onClick={handleClickById2} />
        </div>
        <input type="button" value="Get All 😎" onClick={handleClick} />
        <br />
      
        { data.loading && <Loading /> }
        { data.error && <Alert message={data.error.message} /> }
        { data.data && <UserList users={data.data} /> } */}

        {/* <p>
          Token : { localStorage.getItem("token") }
          <br />
          Try : { localStorage.getItem("call-api-try")}
        </p> */}
      </main>
      <footer>
        <hr />
        <p className="text-center">
          <a href="de" className="link-secondary text-decoration-none font-monospace letter-spacing-5" >slaveofthecode</a>
        </p> 
        <p className="d-flex justify-content-center gap-3" >
           <a href="https://www.linkedin.com/in/gustavoml/" target="__blank" className="link-secondary text-decoration-none font-monospace letter-spacing-5" ><i class="bi bi-linkedin"></i></a>
           <a href="https://github.com/slaveofthecode" target="__blank" className="link-secondary text-decoration-none font-monospace letter-spacing-5" ><i class="bi bi-github"></i></a>
        </p>       
      </footer>
    </div>
  );
}
