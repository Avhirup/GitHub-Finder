import UserResults from '../components/user/UserResults';
import UserSearch from '../components/user/userSearch';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SEARCH COMPONENT GOES HERE */}
      <UserSearch />
      {/* USERS RESULT GOES HERE */}
      <UserResults />
      {/* {import.meta.env.VITE_GITHUB_TOKEN} */}
    </div>
  );
}
