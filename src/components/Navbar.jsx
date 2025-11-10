import { Link } from "react-router-dom";
import logo from "../assets/farm.jpg";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">
        <img src={logo} alt="Logo" className="logo-image" />
        
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/tasks">Task</Link>
        <Link to="/profile">Update Profile</Link>
      </nav>

      {/* right side placeholder for avatar or actions */}
      <div style={{ width: 44 }} />
    </header>
  );
}
