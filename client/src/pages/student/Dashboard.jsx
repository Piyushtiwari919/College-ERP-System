import { Routes, Route, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-screen text-white p-6">
        <h2 className="text-xl font-bold mb-6">Student Panel</h2>
        <ul className="space-y-3">
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="attendance">My Attendance</Link></li>
          <li><Link to="library">My Books</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="profile" element={<div>Profile Page</div>} />
          <Route path="attendance" element={<div>Attendance Page</div>} />
          <Route path="library" element={<div>Library Page</div>} />
          <Route path="" element={<div>Welcome to Student Dashboard</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
