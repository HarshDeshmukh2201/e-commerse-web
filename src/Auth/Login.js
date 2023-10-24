
import logo from "../images/signup-image.jpg";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Auth.css"

function Login() {

  const {
    register,
    handleSubmit,
    reset,
   
    formState: {errors},
  } = useForm();
  const onSubmit = (data) => {
   
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) { // getItem can return actual value or null
        if (userData.password === data.password ) {
          toast(userData.name + " You Are Successfully Logged In",{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        } else {
          toast("Email or Password is not matching with our record", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
    } else {
      toast("Email or Password is not matching with our record",
       {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    reset()

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
                    type="text"                    name="your_email"
                    id="your_Email"
                    placeholder="Your Email"
                   
                    {...register("email", { required: true })}
                  />
                 
             
                
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
                    {...register("password",{ required: true})}
                  />
                 
             

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
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>

    </div>
  );
}

export default Login;
