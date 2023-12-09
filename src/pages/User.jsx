import { FaCodepen, FaCode, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Loading from '../components/layouts/Loading';
import RepoList from '../components/repos/RepoList';
import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';
// import { getUser, getUserRepos } from '../context/github/GithubActions';
import { getUserAndRepos } from '../context/github/GithubActionsAxios';

export default function User() {
  const params = useParams();

  const {
    // getUser,
    user,
    loading,
    // getUserRepos,
    dispatch,
  } = useContext(GithubContext);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  //*_________________ when using GithubActions ________________*/
  // useEffect(() => {
  //   dispatch({ type: 'SET_LOADING' });
  //   const getUserDataAndRepos = async () => {
  //     const userData = await getUser(params.login);
  //     dispatch({ type: 'GET_SINGLE_USER', payload: userData });
  //     dispatch({ type: 'SET_LOADING' });
  //     const userRepos = await getUserRepos(params.login);
  //     dispatch({ type: 'GET_REPOS', payload: userRepos });
  //   };
  //   getUserDataAndRepos();
  // }, [dispatch, params.login]);
  //*_________________ when using GithubActions ________________*/

  //*?_________________ when using GithubActions ________________*/
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    const getUserDataAndRepos = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({ type: 'GET_USER_AND_REPOS', payload: userData });

      // dispatch({ type: 'GET_SINGLE_USER', payload: user });
      // dispatch({ type: 'SET_LOADING' });
      // dispatch({ type: 'GET_REPOS', payload: repos });
    };
    getUserDataAndRepos();
  }, [dispatch, params.login]);
  //*?_________________ when using GithubActions ________________*/

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost btn-outline">
            Go Back
          </Link>
        </div>

        {/* Section 1 */}
        {/* xl:grid-cols-4 lg:grid-cols-3  */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-8 md:gap-8">
          {/* Picture */}
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="" />
              </figure>
              <div className="flex flex-col justify-end px-4 pb-4">
                <h2 className="card-title mb-0 font-bold text-white text-shadow-[0_2px_8px_#161A30]">
                  {name}
                </h2>
                <p className="font-semibold text-white text-shadow-[0_2px_8px_#161A30]">
                  @{login}
                </p>
              </div>
            </div>
          </div>

          {/* User's Primary Details */}
          <div className="w-[100%] col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="mt-4">{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
            {/*  flex flex-col flex-wrap */}
            {(location || blog || twitter_username) && (
              <div className="w-full rounded-lg shadow-lg bg-base-200 stats border-[1px] border-slate-500">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-md">location</div>
                    <div className="text-lg stat-value">{location}</div>
                  </div>
                )}
                {blog && (
                  <div className="stat">
                    <div className="stat-title text-md">Website</div>
                    <div className="text-lg stat-value">
                      <a
                        className="text-[#1640D6] underline"
                        href={`https://${blog}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md">Twitter</div>
                    <div className="text-lg stat-value">
                      <a
                        className="text-[#1640D6] underline"
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats border-[1px] border-red-200">
          {/* Followers */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          {/* Followings */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          {/* Public Repos */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCode className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          {/* Public Gists */}
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>

        {/* Repos */}
        {/* <RepoList repos={repos} /> */}
        <RepoList />
      </div>
    </>
  );
}
