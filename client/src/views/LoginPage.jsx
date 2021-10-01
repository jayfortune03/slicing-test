export default function LoginPage() {
  return (
    <div className="login flex">
      <div className="flex-col flex w-full mt-32 ml-96 items-end lg:w-2/3 md:w-3/5">
        <h1 className="text-8xl mr-32 font-black text-white">Audio</h1>
        <h1 className="font-bold text-xl my-10 mr-28 flex text-white">
          It's modular and designed to last
        </h1>
        <form action="" className="mt-2 flex flex-col lg:w-1/2 w-8/12">
          <div className="flex flex-wrap w-full mb-4 relative h-15 bg-white items-center rounded pr-10">
            <div className="flex -mr-px justify-center w-15 p-4">
              <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                <i className="fas fa-user-circle"></i>
              </span>
            </div>
            <input
              type="text"
              className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
              placeholder="Username"
            />
          </div>
          <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">
            <div className="flex -mr-px justify-center w-15 p-4">
              <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            <input
              type="password"
              className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
              placeholder="Password"
            />
            <div className="flex -mr-px">
              <span className="flex items-center leading-normal bg-white rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                <i className="fas fa-eye-slash"></i>
              </span>
            </div>
          </div>
          <a
            href="#"
            className="text-base font-bold mr-48 pt-6 text-white text-right leading-normal hover:underline mb-6"
          >
            Forgot Password
          </a>
          <a
            href="/"
            className="bg-green-400 font-bold text-4xl py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight md:text-base font-sans mt-4 mb-20"
          >
            Sign In
          </a>
          <h1 className="font-black text-white">
            Didn't have any account ?{" "}
            <a
              href="#"
              className="text-base font-black mr-48 pt-6 text-green-400 text-right leading-normal underline mb-6"
            >
              Sign up here
            </a>
          </h1>
        </form>
      </div>
    </div>
  );
}
