import React from 'react'
import img from "../images/signin-image.jpg"
import { useForm } from "react-hook-form";


function Signup() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
 
  const onSubmit = (data) =>{
    localStorage.setItem(data, JSON.stringify({ 
      name: data.name, password: data.Password, email: data.email , rpassword: data.rpassword
  }));
  reset()
  console.log(JSON.parse(localStorage.getItem(data.email)));

  }
  return (
    <>
    <div className="main">
  {/* Sign up form */}
  <section className="signup">
    <div className="container">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Sign up</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="register-form" id="register-form">
            <div className="form-group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name" />
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                {...register("name")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <i className="zmdi zmdi-email" />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                {...register("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pass">
                <i className="zmdi zmdi-lock" />
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Password"
                {...register("password")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="re-pass">
                <i className="zmdi zmdi-lock-outline" />
              </label>
              <input
                type="password"
                name="re_pass"
                id="re_pass"
                placeholder="Repeat your password"
                {...register("rpassword")}
              />
            </div>
         
            <div className="form-group form-button">
              <input
               type={"submit"} 
                name="signup"
                id="signup"
                className="form-submit"
                defaultValue="Register"
              />
            </div>
          </form>
        </div>
        <div className="signup-image">
          <figure>
            <img src={img}/>
          </figure>
          <a href="#" className="signup-image-link">
            I am already member
          </a>
        </div>
      </div>
    </div>
  </section>
  
</div>

    </>
  )
}

export default Signup

