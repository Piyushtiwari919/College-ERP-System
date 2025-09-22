// src/pages/AdminDashboard.jsx
import Sidebar from "../../components/Sidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-5">Admin Dashboard</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Students</h3>
            <p>Manage student records (CRUD)</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Faculty</h3>
            <p>Manage faculty records</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Hostel</h3>
            <p>Manage hostel details</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Library</h3>
            <p>Approve/cancel issued books</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
