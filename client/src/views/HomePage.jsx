import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-9xl mt-12 mb-24 mx-auto text-black font-bold">
        Simple Ecommerce Design
      </h1>
      <div className="grid grid-cols-2 mx-56">
        <Link
          to="/login"
          className="bg-green-500 text-6xl hover:grow text-white font-bold rounded-2xl mx-auto p-20"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="bg-green-500 text-6xl hover:grow text-white font-bold rounded-2xl mx-auto p-20"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
