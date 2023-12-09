// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import RepoItem from './RepoItem';

// export default function RepoList({ repos }) {
export default function RepoList() {
  const { login } = useParams();
  const { repos } = useContext(GithubContext);
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">
          Latest Repositories
        </h2>
        {repos.length === 0 ? (
          <h3>{login} doesn't have any public repositories yet.</h3>
        ) : (
          repos.map((repo) => <RepoItem key={repo.id} repo={repo} />)
        )}
      </div>
    </div>
  );
}

// RepoList.propTypes = {
//   repos: PropTypes.array.isRequired,
// };
