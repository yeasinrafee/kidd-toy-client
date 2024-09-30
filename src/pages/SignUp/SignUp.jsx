import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
  useTitle('KiddToY | Sign Up');
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // It'll update the user name and Photo
        updateUser(name, photo)
          .then(() => {
            console.log('User Updated');
            form.reset();
          })
          .catch((err) => console.log(err));
        console.log(user);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='w-full md:w-4/12 mx-auto border px-4 md:px-14 py-8 md:py-20 my-10 rounded-md shadow-lg'>
      <h1 className='text-2xl md:text-4xl uppercase font-bold text-center my-6 text-violet-500'>
        Please Sign Up
      </h1>
      <form className='space-y-5' onSubmit={handleSignUp}>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Name</span>
          </label>
          <input
            type='text'
            placeholder='Name'
            className='input input-bordered w-full'
            name='name'
            required
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            placeholder='Email'
            className='input input-bordered w-full'
            name='email'
            required
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered w-full'
            name='password'
            required
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Photo URL</span>
          </label>
          <input
            type='text'
            placeholder='Photo URL'
            className='input input-bordered w-full'
            name='photo'
          />
        </div>
        <input
          type='submit'
          value='Sign Up'
          className='btn  bg-violet-500 border-none mt-3 hover:bg-violet-800 w-full'
        />
      </form>
      <p className='my-5 text-center text-sm'>
        Already have an account?{' '}
        <Link to='/login' className='text-violet-500 font-bold'>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
