import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { SearchMovies } from "./Pages/SearchMovies";
import { ROUTE } from "./consts/routes";



// const initialData = {
//   loading: false,
//   error: null,
//   data: null
// };

export default function App() {
  
  // const [ data, setData ] = useState(initialData);
  // const { getAll, users, getById, user } = useUsers();  

  // const handleClick = () => {
  //   getAll();
  // }

  // const handleClickById1 = () => {
  //   getById(1);
  // }

  // const handleClickById2 = () => {
  //   getById(2);
  // }

  // useEffect( () => {
  //   if(users){
  //     setData(users);
  //   } 

  // },[users]);

  // useEffect( () => {
  //   if(user){
  //     setData(user);
  //   }

  // },[user]);


  return (
    <div className="container-fluid p-4 bg-black bg-gradient text-light vh-100">
      <Header />
      <main>
        <hr />
        <Routes>
            <Route path={ROUTE.HOME} element={<Home />} />
            <Route path={ROUTE.SEARCH_MOVIES} element={<SearchMovies />} />
            <Route path={ROUTE.NOT_FOUND} element={<div>404</div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
