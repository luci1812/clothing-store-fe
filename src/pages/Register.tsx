import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: string;
}

function Register() {
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
        <h1 className="font-heading text-2xl pb-8 md:pb-12 md:text-5xl">Register Page</h1>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-wrap">
            <label htmlFor="register-first-name" className="input-label">
              First name
            </label>
            <input
              id="register-first-name"
              className="input"
              type="text"
              {...register("firstName", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Za-zÀ-ỹ\s]+$/,
                  message: "No numbers or special characters allowed"
                }
              })}
            />
            {errors.firstName && (
              <p className="text-red-700 text-sm mt-1">{String(errors.firstName.message)}</p>
            )}
          </div>
          <div className="input-wrap">
            <label htmlFor="register-last-name" className="input-label">
              Last name
            </label>
            <input
              id="register-last-name"
              type="text"
              className="input"
              {...register("lastName", {
                required: "This field is required",
                pattern: {
                  value: /^[A-Za-zÀ-ỹ\s]+$/,
                  message: "No numbers or special characters allowed"
                }
              })}
            />
            {errors.lastName && (
              <p className="text-red-700 text-sm mt-1">{String(errors.lastName.message)}</p>
            )}
          </div>
          <div className="input-wrap">
            <label htmlFor="register-date-of-birth" className="input-label">
              Date of birth
            </label>
            <input
              id="register-date-of-birth"
              type="date"
              className="input"
               {...register("dateOfBirth", {
                  required: "Please select your birth date",
                  validate: (value) => {
                    const selectedDate = new Date(value);
                    const today = new Date();

                    return selectedDate <= today || "Date cannot be in the future";
                  }
                })}
              />
              {errors.dateOfBirth && (
                <p className="text-red-700 text-sm mt-1">{errors.dateOfBirth.message}</p>
              )}
          </div>
          <div className="input-wrap">
            <label htmlFor="register-email" className="input-label">
              Email
            </label>
            <input
              id="register-email"
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
            <label htmlFor="register-password" className="input-label">
              Password
            </label>
            <input
              id="register-password"
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
        <Link to="/login" className="mt-4">
          Login
        </Link>
      </div>
    </>
  );
}
export default Register;
