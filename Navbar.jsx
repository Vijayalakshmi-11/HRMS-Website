import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/payroll">Payroll</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
