import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white p-5">
      <ul className="space-y-4">
        <li><Link to="/dashboard">🏠 Dashboard</Link></li>
        <li><Link to="/employees">👨‍💼 Employees</Link></li>
        <li><Link to="/payroll">💰 Payroll</Link></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
