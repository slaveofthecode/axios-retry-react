/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo, useState } from "react";
import { getUsers, getUser } from "../services/users";

export function useUsers() {
  const [users, setUsers] = useState({
    data: [],
    loading: false,
    error: null,
  });
  const [user, setUser] = useState({
    data: {},
    loading: false,
    error: null,
  });

  const getAll = async () => {
      setUsers({
          data: [],
          loading: true,
          error: null
      });

      try {

          const { data: users } = await getUsers();
          setUsers({
              data: users,
              loading: false,
              error: null
          });

      } catch (error) {
          setUsers({
              data: [],
              loading: false,
              error: error
          });
      }
  };

  const memoizedValueGetById = useCallback(async (id) => {
    setUser({
        data: [],
        loading: true,
        error: null
    });

    try {

        const { data: user } = await getUser(id);
        setUser({
            data: user,
            loading: false,
            error: null        
        });

    } catch (error) {
        setUser({
            data: [],
            loading: false,
            error: error
        });
    }
}, []);

  const getById = async (id) => {    
    return memoizedValueGetById(id);

    // setUser({
    //     data: [],
    //     loading: true,
    //     error: null
    // });

    // try {

    //     const { data: user } = await getUser(id);
    //     setUser({
    //         data: user,
    //         loading: false,
    //         error: null        
    //     });

    // } catch (error) {
    //     setUser({
    //         data: [],
    //         loading: false,
    //         error: error
    //     });
    // }

  };

//   const memoizedValueGetById = useMemo();

  return { getAll, users, getById, user };
}
