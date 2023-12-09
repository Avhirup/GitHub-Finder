const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;


//!________________ get searched users _______________/
export const searchUsers = async (text) => {
    const userName = text.split(' ').join('');
    const params = new URLSearchParams({
        q: userName,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });

    const { items } = await response.json();

    return items;
};
//!________________ get searched users _______________/


//!________________ get a single user _______________/
export const getUser = async (text) => {
    const login = text.split(' ').join('');

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
        headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
        },
    });
    if (response.status === 404) {
        window.location = '/notfound';
    } else {
        const data = await response.json();

        return data;
    }
    return null;
};
//!________________ get a single user _______________/


//!________________ get user repos _______________/
export const getUserRepos = async (login) => {

    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10,
    });

    const response = await fetch(
        `${GITHUB_URL}/users/${login}/repos?${params}`,
        {
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
            },
        }
    );

    const data = await response.json();

    return data;
};
//!________________ get user repos _______________/