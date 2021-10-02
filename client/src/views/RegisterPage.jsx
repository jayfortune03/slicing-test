import { Link } from "react-router-dom";

import lock from "../assets/lock.png";
import mail from "../assets/mail.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

export default function RegisterPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl flex text-black font-bold mx-auto my-6">
        Register Page
      </h1>
      <div className="artboard phone-4 mx-auto my-auto login artboard-demo">
        <h1 className="font-bold text-5xl mb-4 mt text-white">Audio</h1>
        <h1 className="font-medium text-md mb-32 flex text-white">
          It's modular and designed to last
        </h1>
        <form action="" className="flex flex-col">
          <div className="flex flex-wrap w-full mb-6 relative h-15 bg-white items-center rounded-xl pr-10">
            <div className="flex -mr-px p-4 justify-center">
              <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                <img src={mail} width="24" height="24" />
              </span>
            </div>
            <input
              type="email"
              className="flex-shrink flex-grow flex-auto leading-normal w-56 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative text-md outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded-xl mb-6">
            <div className="flex -mr-px p-4 justify-center">
              <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <img src={lock} width="24" height="24" />
              </span>
            </div>
            <input
              type="password"
              className="flex-shrink flex-grow flex-auto leading-normal w-56 border-0 h-10 px-3 relative self-center text-md outline-none"
              placeholder="Password"
            />
          </div>
          <a
            href="/"
            className="signin-btn font-bold py-4 text-center px-4 text-white rounded-xl leading-tight mt-4 mb-12"
          >
            Sign Up
          </a>
          <div className="flex">
            <div className="grid grid-cols-3 mx-auto gap-5 mb-6">
              <a href="#" className="border rounded-xl bg-white p-4 mx-auto">
                <img src={apple} />
              </a>
              <a
                href="#"
                className="border rounded-xl bg-white p-4 px-5 mx-auto"
              >
                <img src={facebook} />
              </a>
              <a href="#" className="border rounded-xl bg-white p-4 mx-auto">
                <img src={google} />
              </a>
            </div>
          </div>
          <h1 className="text-white">
            If you have an account?{" "}
            <Link to="/login" href="#" className="text-green-400 underline">
              Sign In here
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}
