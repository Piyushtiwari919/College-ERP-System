// src/pages/FacultyDashboard.jsx
import Sidebar from "../../components/Sidebar";

const FacultyDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="faculty" />
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
        <h2 className="text-3xl font-bold mb-5">Faculty Dashboard</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Attendance</h3>
            <p>Take & update attendance</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Library</h3>
            <p>Allot/cancel books</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-3">Students Info</h3>
            <p>View student information</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
