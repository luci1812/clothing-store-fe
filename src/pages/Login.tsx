import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div className="size-full px-6 flex flex-col justify-center items-center md:w-125">
        <h1 className="font-heading text-2xl pb-8 md:pb-12 md:text-5xl">Login Page</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-full">
          <div className="input-wrap">
            <label htmlFor="login-email" className="input-label">
              Email
            </label>
            <input
              id="login-email"
              type="email"
              className="input"
              {...register("email", {
                required: "This field is required",
                pattern: { value: /^\S+@\S+$/i, message: "Email is invalid" },
              })}
            />
            {errors.email && <p className="text-red-700 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="input-wrap">
            <label htmlFor="login-password" className="input-label">
              Password
            </label>
            <input
              id="login-password"
              type="password"
              className="input"
              {...register("password", {
                required: "This field is required"
              })}
            />
            {errors.password && <p className="text-red-700 text-sm mt-1">{errors.password.message}</p>}
          </div>
          <button type="submit" className="button button-primary w-fit mx-auto">
            Submit
          </button>
        </form>
        <Link to="/register" className="mt-4">
          Sign up
        </Link>
      </div>
    </>
  );
}
export default Login;
