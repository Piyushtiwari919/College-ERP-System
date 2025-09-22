// src/components/Sidebar.jsx
import { Link } from "react-router-dom";

const Sidebar = ({ role }) => {
  const adminLinks = [
    { name: "Dashboard", path: "/admin" },
    { name: "Students", path: "/admin/students" },
    { name: "Faculty", path: "/admin/faculty" },
    { name: "Hostel", path: "/admin/hostel" },
    { name: "Library", path: "/admin/library" },
  ];

  const facultyLinks = [
    { name: "Dashboard", path: "/faculty" },
    { name: "Attendance", path: "/faculty/attendance" },
    { name: "Library", path: "/faculty/library" },
    { name: "Students Info", path: "/faculty/students" },
  ];

  const links = role === "admin" ? adminLinks : facultyLinks;

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-5">
      <h1 className="text-2xl font-bold mb-10">{role.toUpperCase()} PANEL</h1>
      <ul>
        {links.map((link) => (
          <li key={link.name} className="mb-4 hover:bg-gray-700 p-2 rounded">
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
