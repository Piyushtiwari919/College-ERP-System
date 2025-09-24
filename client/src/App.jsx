import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import AdminDashboard from "./pages/admin/Dashboard";
import StudentDashboard from "./pages/student/Dashboard";
import AdmissionForm from "./pages/AdmissionForm";
import PaymentPage from "./pages/PaymentPage";
import Appfaculty from "./pages/faculty/Appfaculty";
import { AdminProvider } from './contexts/AdminContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
         {/* Admission Form */}
        <Route path="/admission-form" element={<AdmissionForm />} />
        {/* Payment Page */}
        <Route path="/payment" element={<PaymentPage />} />

          {/* Role-based dashboards */}
         <Route
          path="/admin/*"
          element={
            <PrivateRoute allowedRoles={["admin"]}>
                <ThemeProvider>
        <AdminProvider>
          <AdminDashboard />
        </AdminProvider>
      </ThemeProvider>
            </PrivateRoute>
          }
        />

        <Route
          path="/faculty/dashboard"
          element={
            <PrivateRoute allowedRoles={["faculty"]}>
              <Appfaculty />
            </PrivateRoute>
          }
        />

        <Route
          path="/student/dashboard"
          element={
            <PrivateRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </PrivateRoute>
          }
            />
      </Routes> 
    </>
  );
}

export default App;
