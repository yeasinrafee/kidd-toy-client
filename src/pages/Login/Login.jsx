import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
  useTitle('Login');
  const [error, setError] = useState('');
  const { user, logIn, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // Password validation
    if (user) {
      setError('');
      if (user.email !== email) {
        setError('Email and password could not matched');
      } else if (email === '' || password === '') {
        setError('All fields are required');
        return;
      } else if (password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
      }
    }

    // Login Authentication
    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // Handle Google Login
  const handleGoogle = () => {
    setError('');
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className='w-full md:w-4/12 mx-auto border px-4 md:px-14 py-8 md:py-20 my-10 rounded-md shadow-lg'>
      <h1 className='text-2xl md:text-4xl uppercase font-bold text-center my-6 text-violet-500'>
        Please Login
      </h1>
      <form className='space-y-5' onSubmit={handleLogin}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='email'
            className='input input-bordered w-full'
            name='email'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='password'
            className='input input-bordered w-full'
            name='password'
          />
        </div>
        <input
          type='submit'
          value='Login'
          className='btn btn-block bg-violet-500 border-none mt-5 hover:bg-violet-800 w-full'
        />
      </form>

      {/* Showing Error Text  */}
      <p className='text-red-500 mt-3 text-center'>{error}</p>

      <div className='mt-5 w-full md:w-[250px] mx-auto'>
        <button onClick={handleGoogle} className='w-full'>
          <img
            src='/images/googleSignIn.webp'
            alt='Google sign in'
            className='w-full'
          />
        </button>
      </div>

      <p className='my-5 text-center text-sm'>
        New to service?{' '}
        <Link to='/signup' className='text-violet-500 font-bold'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
