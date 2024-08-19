import bg from './images/bg.jpg';
import logo from './images/logo.png';
import { IoLogoGithub } from "react-icons/io";
import { FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <div className="w-full flex items-center justify-center h-screen bg-slate-100">
      <div className="h-[calc(600px-0.1rem)] w-10/12 flex bg-white rounded-lg shadow shadow-slate-300">
        <div className="w-1/2 max-sm:w-full h-full">
          <div className='flex mt-5 pl-10 pr-10 items-center justify-between'>
            <img src={logo} className='w-20 h-16'></img>
            <h3 className='underline font-semibold cursor-pointer text-black text-md'>Create an account</h3>
          </div>
          <div className='flex animate-slidein flex-col items-center justify-center mt-5 text-black'>
            <h1 className='font-bold text-2xl'>Welcome Back</h1>
            <p className='text-black mt-2 tracking-wide text-sm'>Enter your account details.</p>
          </div>
          <div className='flex items-center mt-5 justify-center flex-col'>
            <div className='w-2/3 hover:bg-black hover:text-white transition duration-300 cursor-pointer bg-slate-100 h-12 items-center justify-center rounded-lg flex pl-5 pr-5'>
              <FaGoogle />
              <h2 className='font-semibold ml-2 text-sm'>Log in with Google</h2>
            </div>
            <div className='w-2/3 cursor-pointer hover:bg-black hover:text-white transition  mt-2 bg-slate-100 h-12 items-center justify-center rounded-lg flex pl-5 pr-5'>
              <IoLogoGithub />
              <h2 className='font-semibold ml-2 text-sm'>Log in with Github</h2>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex mt-5 items-center justify-center w-2/3'>
              <div className='w-full h-[0.5px] bg-black'></div>
              <h3 className='text-black ml-2 font-semibold'>OR</h3>
              <div className='w-full ml-2 h-[0.5px] bg-black'></div>
            </div>
          </div>
          <div className='flex flex-col mt-5 items-center justify-center'>
            <input
              placeholder="Email or Username"
              type="email"
              className="w-2/3 bg-slate-100 h-12 items-center justify-center rounded-lg flex pl-5 pr-5 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
            />
            <input
              placeholder="Password"
              type="password"
              className="w-2/3 mt-2 bg-slate-100 h-12 items-center justify-center rounded-lg flex pl-5 pr-5 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
            />
          </div>
          <div className='w-full flex mt-5 items-center justify-center'>
            <div className='flex items-center justify-between  w-2/3'>
              <div className='flex'>
                <input
                  type="checkbox"
                  className=" text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 transition duration-300"
                />

                <p className='text-black ml-1 font-semibold text-sm'>Keep me signed in</p>

              </div>
              <h3 className='underline font-semibold cursor-pointer text-black text-sm'>Create an account</h3>

            </div>
          </div>

          <div className='flex items-center mt-5 justify-center '>
            <button className='bg-black transition duration-300 cursor-pointer hover:bg-slate-900 w-2/3 rounded-lg hover:scale-105 h-12 text-white'>Sign in</button>
          </div>
        </div>
        <div className="w-1/2 max-sm:hidden h-full">
          <img src={bg} className='w-full rounded-lg h-full'></img>
        </div>
      </div>
    </div>
  );
}

export default Login;
