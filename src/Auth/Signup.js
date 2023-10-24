import React, { useState } from 'react'
import img from "../images/signin-image.jpg"
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Auth.css"
import {BsEye} from "react-icons/bs"
import {BsEyeSlash} from "react-icons/bs"

function Signup() {
  const [type, setType] = useState('password');
  const [eye , setEye] =useState(true)
  const handleToggle = ()=>{
    if (type==='password'){
      setEye(false)
      setType('text')
   } else {
    setEye(true)
     
      setType('password')
   }
  }
  const { register, handleSubmit, reset,watch,  trigger, formState: { errors } } = useForm();
 
  const onSubmit = (data) =>{
    localStorage.setItem(data.email, JSON.stringify({ 
    
      name: data.name,phoneNo:data.phone, password: data.password, email: data.email ,confirmPassword:data.repeatPassword

  }));
  reset()
  console.log(JSON.parse(localStorage.getItem(data.email)));
  toast("Registration Successfull")
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
          <form onSubmit={handleSubmit(onSubmit)} className="register-form" id="register-form"        noValidate>
            <div className="form-group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name" />
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                {...register("name",{required:"name is required"})}
              />
               {errors.name && (
                  <span className="text-info" style={{color:"red"}}> {errors.name.message}</span>
                )}
             
            </div>
            <div className="form-group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icons-name" />
              </label>
              <input
                type="number"
                
                placeholder="Phone Number"
                {...register("phone",{required:"phone numberis required"})}
              />
               {errors.phone && (
                  <span className="text-info"  style={{color:"red"}} > {errors.phone.message}</span>
                )}
             
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
                {...register("email",{ 
                  required: "email is required",  
                  pattern:{ value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ,
                  message:"invalid email address"}
              },
              )}
            

              />
                {errors.email && (
                  <span className="text-danger" style={{color:"red"}} > {errors.email.message}</span>
                )}
            
            </div>
            <div className="form-group" style={{    marginBottom: "0px"}}>
              <label htmlFor="pass">
                <i className="zmdi zmdi-lock" />
              </label>
              <input
                type={type}
                name="pass"
                id="pass"
                placeholder="Password"
                onClick={() => {
                  trigger("password")
                }}

                {...register("password",{ required: true,   minLength: { value: "8", message: "Must be at least 8 charactor"  } })}
              />
              <span className='eye-pos '  onClick={handleToggle }>{eye?<BsEyeSlash/>:<BsEye/>}</span> 
              {errors.password && (
                  <span className="text-danger"style={{color:"red"}}   > {errors.password.message}</span>
                )}
  </div>
            <div className="form-group">
              <label htmlFor="pass">
                <i className="zmdi zmdi-lock" />
              </label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Confirm Password"
                {...register("repeatPassword",{ required:true  ,validate:(value)=> value === watch("password")|| "Passwords do not match"})}
                onClick={() => {
                  trigger("repeatPassword")
                }}
  
              />
               {errors.repeatPassword && (
                  <span className="text-danger" style={{color:"red"}} > {errors.repeatPassword.message}</span>
                )}
                
                
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

