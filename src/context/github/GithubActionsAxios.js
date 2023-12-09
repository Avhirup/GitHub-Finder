import axios from "axios";
const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


const githubData = axios.create({
    baseURL: GITHUB_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    },
})

//!________________ get searched users _______________/
export const searchUsers = async (text) => {
    const userName = text.split(' ').join('');
    const params = new URLSearchParams({
        q: userName,
    });

    const response = await githubData.get(`/search/users?${params}`);
    return response.data.items;
}
//!________________ get searched users _______________/


//?________________ get a single user and repos _______________/
export const getUserAndRepos = async (text) => {
    const login = text.split(' ').join('');
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });
    const [user, repos] = await Promise.all([githubData.get(`/users/${login}`), githubData.get(`/users/${login}/repos?${params}`)]);

    return { user: user.data, repos: repos.data };
}
//?________________ get a single user and repos _______________/
