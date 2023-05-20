import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { user, logIn, googleLogIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => console.log(err));
  };

  // Handle Google Login
  const handleGoogle = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-violet-500">
        Please Login
      </h1>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
            name="password"
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-block bg-violet-500 border-none mt-5 hover:bg-violet-800"
        />
      </form>
      <div className="mt-5 w-[250px] mx-auto">
        <button onClick={handleGoogle}>
          <img src="./images/googleSignIn.png" alt="Google sign in" />
        </button>
      </div>
      <p className="my-5 text-center text-sm">
        New to service?{" "}
        <Link to="/signup" className="text-violet-500 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
