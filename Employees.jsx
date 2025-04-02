import { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer" },
    { id: 2, name: "Jane Smith", role: "HR Manager" },
  ]);

  return (
    <div>
      <h1 className="text-2xl font-bold">Employees</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
