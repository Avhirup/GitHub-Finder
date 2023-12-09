import { createContext, useReducer } from 'react';
import githubReducer from './GithubReducer';

const GithubContext = createContext();

// const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
// const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //************ useState *************/
  //   const [users, setUsers] = useState([]);
  //   const [loading, setLoading] = useState(true);
  //************ useState *************/

  //!-------------------------------------------------//
  //!------------------ useReducer -------------------//
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  //!------------------ useReducer -------------------//
  //!-------------------------------------------------//

  //!________________ get searched users _______________/
  // const searchUsers = async (text) => {
  //   setLoading();
  //   const userName = text.split(' ').join('');
  //   const params = new URLSearchParams({
  //     q: userName,
  //   });

  //   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });

  //   const { items } = await response.json();

  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: items,
  //   });
  // };
  //!________________ get searched users _______________/

  //!________________ get a single user _______________/
  // const getUser = async (text) => {
  //   setLoading();
  //   const login = text.split(' ').join('');

  //   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   if (response.status === 404) {
  //     window.location = '/notfound';
  //   } else {
  //     const data = await response.json();

  //     dispatch({
  //       type: 'GET_SINGLE_USER',
  //       payload: data,
  //     });
  //   }
  // };
  //!________________ get a single user _______________/

  //!________________ get user repos _______________/
  // const getUserRepos = async (login) => {
  //   setLoading();

  //   const params = new URLSearchParams({
  //     sort: 'created',
  //     per_page: 10,
  //   });

  //   const response = await fetch(
  //     `${GITHUB_URL}/users/${login}/repos?${params}`,
  //     {
  //       headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       },
  //     }
  //   );

  //   const data = await response.json();

  //   dispatch({
  //     type: 'GET_REPOS',
  //     payload: data,
  //   });
  // };
  //!________________ get user repos _______________/

  //?------------------ set Loading ----------------//
  // const setLoading = () => dispatch({ type: 'SET_LOADING' });
  //?------------------ set Loading ----------------//

  //?___________________ clear users ___________________/
  //?___________________________________________________/
  // const clearUsers = () => {
  //   dispatch({
  //     type: 'CLEAR_USERS',
  //   });
  // };
  //?___________________________________________________/
  //?___________________ clear users ___________________/

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
        // searchUsers,
        // clearUsers,
        // getUser,
        // getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

/*
we can send values like these two ways in GithubContext
value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}

or 

value={{
        ...state,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
*/
