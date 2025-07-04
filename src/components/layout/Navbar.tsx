// components/Navbar.tsx
import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-amber-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/editPost" className="hover:text-amber-400 transition">
            Edit
          </Link>
        </li>
        <li>
          <Link to="/createPost" className="hover:text-amber-400 transition">
            Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}
