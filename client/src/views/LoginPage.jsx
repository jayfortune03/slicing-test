import lock from "../assets/lock.png";
import mail from "../assets/mail.png";

export default function LoginPage() {
  return (
    <div className="flex bg-black">
      <div className="artboard phone-4 mx-auto my-auto login artboard-demo">
        <h1 className="font-bold text-5xl mb-4 mt text-white">Audio</h1>
        <h1 className="font-regular text-md mb-48 flex text-white">
          It's modular and designed to last
        </h1>
        <form action="" className="flex flex-col">
          <div className="flex flex-wrap w-full mb-4 relative h-15 bg-white items-center rounded-xl pr-10">
            <div className="flex -mr-px p-4 justify-center">
              <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                <img src={mail} width="24" height="24" />
              </span>
            </div>
            <input
              type="email"
              className="flex-shrink flex-grow flex-auto leading-normal w-56 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-md outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded-xl mb-4">
            <div className="flex -mr-px p-4 justify-center">
              <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <img src={lock} width="24" height="24" />
              </span>
            </div>
            <input
              type="password"
              className="flex-shrink flex-grow flex-auto leading-normal w-56 border-0 h-10 px-3 relative self-center font-roboto text-md outline-none"
              placeholder="Password"
            />
          </div>
          <a
            href="#"
            className="text-base font-semibold text-white mb-4 text-center leading-normal hover:underline"
          >
            Forgot Password
          </a>
          <a
            href="/"
            className="signin-btn font-bold py-4 text-center px-4 text-white rounded-xl leading-tight mt-4 mb-4"
          >
            Sign In
          </a>
          <h1 className="text-white">
            Didn't have any account?{" "}
            <a href="#" className="text-green-400 underline">
              Sign Up here
            </a>
          </h1>
        </form>
      </div>
    </div>
  );
}
