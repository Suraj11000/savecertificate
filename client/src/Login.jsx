import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const Navigate = useNavigate();
    const [email, setEmial] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3001/login', {email, password})
      .then(res => {
        if(res.data === "Success"){
          window.location.href ="/"
        }
      })
      .catch(err => console.log(err))
    }
  return (
    <Fragment>
      <div className="flex justify-center content-center items-start center mt-24">
        <div className=" border-2 border-black rounded-lg h-[23rem] xl:w-[25rem] lg:w-[25rem] md:w-[25rem] sm:w-[25rem] w-[20rem]">
          <h2 className=" justify-center flex pt-5">Login</h2>
          <form onSubmit={handleSubmit} className="mx-10">
            <div className=" justify-center flex flex-col pt-2">
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className=" border border-black px-5 rounded-lg"
                onChange={(e) => setEmial(e.target.value)}
              />
            </div>
            <div className=" justify-center flex flex-col pt-2">
              <label htmlFor="password" className="font-semibold">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className=" border border-black px-5 rounded-lg"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className=" justify-center items-center flex pt-5">
              <button className=" bg-sky-500 w-full rounded-lg h-8 text-white font-bold hover:text-sky-500 hover:bg-white hover:border-2 hover:border-black" >Login</button>
            </div>
          </form>
          <br />
          <div className=" mx-10 flex flex-col justify-center items-center">
          <p className="text-sm p-1">Don't have an account ?</p>
          <button onClick={() => Navigate("/register")} className=" bg-sky-500 w-full rounded-lg h-8 text-white font-bold hover:text-sky-500 hover:bg-white hover:border-2 hover:border-black">Register</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
