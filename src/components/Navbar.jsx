import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to='/'>
        <h1 className='text-red-600  md:text-2xl lg:text-4xl font-bold  cursor-pointer'>
          DevUby NETFLIX CLONE
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to='/account'>
            <button className='text-white pr-4'>Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className='bg-red-600 px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded cursor-pointer text-white'
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='text-white px-3 py-2 md:px-4 md:py-3 pr-4'>
              Sign In{' '}
            </button>
          </Link>
          <Link to='/signup'>
            <button className='bg-red-600 px-3 py-2 md:px-4 md:py-3 lg:px-6 lg:py-4 rounded cursor-pointer text-white'>
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
