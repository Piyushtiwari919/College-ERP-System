import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import loginImage from "../assets/abes_login.jpg";
import { loginUser } from "../services/authService";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get role from query param (e.g. /login?role=admin)
  const role = new URLSearchParams(location.search).get("role") || "student";

  const [loginData, setLoginData] = useState({
    admissionNo: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  // Validate form
  const validate = () => {
    let newErrors: Record<string, string> = {};
    if (!loginData.password) newErrors.password = "Password is required";

    if (role === "student" && !loginData.admissionNo) {
      newErrors.admissionNo = "Admission number is required";
    }
    if ((role === "faculty" || role === "admin") && !loginData.email) {
      newErrors.email = "Email is required";
    }

    return newErrors;
  };

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validate input before sending to backend
  const validationErrors = validate(); // your existing validate() function
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    // Call the login service
    const data = await loginUser(loginData); // loginData = { email/admissionNo, password }

    // Save token & role in localStorage
    localStorage.setItem("token", data.token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("userId", data.userId);

    // Redirect user based on role
    if (data.role === "student") {
        // Save student session info for Dashboard load
        localStorage.setItem(
          "studentSession",
          JSON.stringify({
            student: {
              admissionNo: loginData.admissionNo,
              email: data.email || "",
              name: data.name || "",
              // Add other user props if needed
            },
            timestamp: new Date().toISOString(),
          })
        );
        navigate("/student/dashboard");
      } else if (data.role === "admin") {
        navigate("/admin/dashboard");
      } else if (data.role === "faculty") {
        navigate("/faculty/dashboard");
      }

  } catch (err) {
    console.error(err);
    alert((err as Error).message || "Server error. Please try again later.");
  }
};

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full">
      <img src={loginImage} alt="Login" className="w-full h-full object-cover absolute inset-0" />
      <div className="absolute inset-0 bg-[#1f2937]/70"></div>
      <h2 className="absolute text-8xl text-orange-500 top-6 font-bold z-10">ERP Portal</h2>
      <div className="relative z-20 flex items-center justify-center w-full h-full">
        <div className="absolute bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">{role.toUpperCase()} Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            {role === "student" && (
              <div className="flex flex-col space-y-1">
                <label className="text-white">
                  Admission Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="admissionNo"
                  value={loginData.admissionNo}
                  onChange={handleChange}
                  placeholder="Enter Admission Number"
                  className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
                />
                {errors.admissionNo && <span className="text-red-400 text-sm">{errors.admissionNo}</span>}
              </div>
            )}
            {(role === "faculty" || role === "admin") && (
              <div className="flex flex-col space-y-1">
                <label className="text-white">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
                />
                {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
              </div>
            )}
            <div className="flex flex-col space-y-1">
              <label className="text-white">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
              />
              {errors.password && <span className="text-red-400 text-sm">{errors.password}</span>}
            </div>
            <div className="flex justify-between items-center mt-6">
              <button
                type="submit"
                className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
              >
                Login
              </button>
              {role === "student" && (
                <button
                  type="button"
                  onClick={() => navigate("/admission-form")}
                  className="px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition"
                >
                  New Student?
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import loginImage from "../assets/abes_login.jpg";
// import { loginUser } from "../services/authService";
// import StudentLoginForm from "../components/Login/StudentLoginForm";
// import AdminLoginForm from "../components/Login/AdminLoginForm";
// import FacultyLoginForm from "../components/Login/FacultyLoginForm";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const role = new URLSearchParams(location.search).get("role") || "student";

//   const [loginData, setLoginData] = useState({ admissionNo: "", email: "", password: "" });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!loginData.password) newErrors.password = "Password is required";
//     if (role === "student" && !loginData.admissionNo && !loginData.email) newErrors.admissionNo = "Admission number or email is required";
//     if ((role === "faculty" || role === "admin") && !loginData.email) newErrors.email = "Email is required";
//     return newErrors;
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }
//     try {
//       const data = await loginUser(loginData);
//       localStorage.setItem("token", data.token);
//       localStorage.setItem("role", data.role);
//       localStorage.setItem("userId", data.userId);

//       if (data.role === "admin") navigate("/admin/dashboard");
//       else if (data.role === "faculty") navigate("/faculty/dashboard");
//       else navigate("/student/dashboard");
//     } catch (err) {
//       console.error(err);
//       alert((err).message || "Server error. Please try again later.");
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen w-full">
//       <img src={loginImage} alt="Login" className="w-full h-full object-cover absolute inset-0" />
//       <div className="absolute inset-0 bg-[#1f2937]/70"></div>
//       <h2 className="absolute text-8xl text-orange-500 top-6 font-bold z-10">ERP Portal</h2>
//       <div className="relative z-20 flex items-center justify-center w-full h-full">
//         {role === "student" ? (
//           <StudentLoginForm
//             onLogin={({ email, password }) => {
//               setLoginData({ admissionNo: email, email: "", password });
//               handleLogin(new Event("submit"));
//             }}
//           />
//         ) : role === "admin" ? (
//           <AdminLoginForm
//             loginData={loginData}
//             onChange={handleChange}
//             onSubmit={handleLogin}
//             errors={errors}
//           />
//         ) : (
//           <FacultyLoginForm
//             loginData={loginData}
//             onChange={handleChange}
//             onSubmit={handleLogin}
//             errors={errors}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


