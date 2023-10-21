import React from "react";
import logo from "../images/signup-image.jpg";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
   
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
   
    localStorage.setItem(data, JSON.stringify({ 
      name: data.name, password: data.password 
  }));
  
    reset();
  };
  return (
    <div className="main">
      <section className="sign-in">
        <div className="container">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={logo} />
              </figure>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Login</h2>
              <form    onSubmit={handleSubmit(onSubmit)} className="register-form" id="login-form">
                <div className="form-group">
                  <label htmlFor="your_name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"                    name="your_name"
                    id="your_name"
                    placeholder="Your Name"
                   
                    {...register("name", { required: "name is required" })}
                  />
                 
                  {/* <span className="text-danger" > {errors.name.message}</span>
                 */}
                </div>
                <div className="form-group">
                  <label htmlFor="your_pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="your_pass"
                    id="your_pass"
                    placeholder="Password"
                    {...register("password",{ required: "Password is required"})}
                  />
                  {/* <span className="text-danger" > {errors.password.message}</span> */}

                </div>

                <div className="form-group form-button">
                  <input
                 type={"submit"}
                    name="signin"
                    id="signin"
                    className="form-submit"
                    defaultValue="Log in"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
