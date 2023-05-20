import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-1/2 mx-auto border px-14 pt-10 pb-20 my-10 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold text-center my-6 text-violet-500">
        Please Login
      </h1>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
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
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-block bg-violet-500 border-none mt-3 hover:bg-violet-800"
        />
      </form>
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
