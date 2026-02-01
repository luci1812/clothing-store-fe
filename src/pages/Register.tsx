import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="size-full px-6 flex flex-col justify-center items-center md:w-125">
        <h1 className="font-heading text-2xl pb-8 md:pb-12 md:text-5xl">Register Page</h1>
        <form className="flex flex-col gap-4 w-full">
          <div
            className="input-wrap"
          >
            <label htmlFor="register-first-name" className="input-label">First name</label>
            <input id="register-first-name" type="text" name="First name" className="input" required />
          </div>
          <div
            className="input-wrap"
          >
            <label htmlFor="register-last-name" className="input-label">Last name</label>
            <input id="register-last-name" type="text" name="Last name" className="input" required />
          </div>
            <div
            className="input-wrap"
          >
            <label htmlFor="register-date-of-birth" className="input-label">Date of birth</label>
            <input id="register-date-of-birth" type="date" name="ate of birth" className="input" required />
          </div>
          <div
            className="input-wrap"
          >
            <label htmlFor="register-email" className="input-label">Email</label>
            <input id="register-email" type="email" name="Email" className="input" required />
          </div>
          <div
            className="input-wrap"
          >
            <label htmlFor="register-password" className="input-label">Password</label>
            <input id="register-password" type="password" name="Password" className="input" required />
          </div>
          <button type="button" className="button button-primary w-fit mx-auto">Submit</button>
        </form>
        <Link to="/login" className="mt-4">Login</Link>

      </div>
    </>
  );
}
export default Register;