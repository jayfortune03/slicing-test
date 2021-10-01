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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-envelope text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                </svg>
              </span>
            </div>
            <input
              type="email"
              className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-wrap w-full relative h-15 bg-white items-center rounded mb-4">
            <div className="flex -mr-px justify-center w-15 p-4">
              <span className="flex items-center leading-normal bg-white rounded rounded-r-none text-xl px-3 whitespace-no-wrap text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-lock text-gray-400"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                </svg>
              </span>
            </div>
            <input
              type="password"
              className="flex-shrink flex-grow flex-auto leading-normal w-px border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
              placeholder="Password"
            />
          </div>
          <a
            href="#"
            className="text-base font-bold mr-48 text-white text-right leading-normal hover:underline mb-2 mt-2"
          >
            Forgot Password
          </a>
          <a
            href="/"
            className="bg-green-400 font-bold text-4xl py-4 text-center px-17 md:px-12 md:py-4 text-white rounded leading-tight md:text-base font-sans mt-4 mb-20"
          >
            Sign In
          </a>
        </form>
        <h1 className="font-black ml-2 shadow-lg text-white">
          Didn't have any account ?{" "}
          <a
            href="#"
            className="text-base font-black mr-48 pt-6 text-green-400 text-right leading-normal underline mb-6"
          >
            Sign up here
          </a>
        </h1>
      </div>
    </div>
  );
}
