import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="size-full px-6 flex flex-col justify-center items-center md:w-125">
        <h1 className="font-heading text-2xl pb-8 md:pb-12 md:text-5xl">Login Page</h1>
        <form className="flex flex-col gap-4 w-full">
          <div
            className="input-wrap"
          >
            <label htmlFor="login-email" className="input-label">Email</label>
            <input id="login-email" type="email" name="Email" className="input" required />
          </div>
          <div
            className="input-wrap"
          >
            <label htmlFor="login-password" className="input-label">Password</label>
            <input id="login-password" type="password" name="Password" className="input" required />
          </div>
          <button type="button" className="button button-primary w-fit mx-auto">Submit</button>
        </form>
        <Link to="/register" className="mt-4">Sign up</Link>
      </div>
    </>
  );
}
export default Login;
