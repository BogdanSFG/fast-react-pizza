import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

function Username() {
  const username = useSelector(getUser);
  if (!username) return null;

  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
}

export default Username;
