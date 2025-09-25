import { Link } from "lucide-react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const loginUser = async (loginData: { admissionNo?: string; email?: string; password: string }) => {
  await new Promise((r) => setTimeout(r, 500));

  if (loginData.password !== "test123") {
    throw new Error("Invalid password");
  }

  if (loginData.admissionNo) {
    return {
      token: "dummy-student-token",
      role: "student",
      userId: "student-id-123",
      email: "student@example.com",
      name: "Test Student",
    };
  } else if (loginData.email === "admin@example.com") {
    return {
      token: "dummy-admin-token",
      role: "admin",
      userId: "admin-id-123",
      email: "admin@example.com",
      name: "Admin User",
    };
  } else if (loginData.email) {
    return {
      token: "dummy-faculty-token",
      role: "faculty",
      userId: "faculty-id-123",
      email: loginData.email,
      name: "Faculty User",
    };
  } else {
    throw new Error("Invalid login data");
  }
};

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const role = new URLSearchParams(location.search).get("role") || "student";

  const [loginData, setLoginData] = useState({
    admissionNo: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!loginData.password) newErrors.password = "Password is required";

    if (role === "student" && !loginData.admissionNo) {
      newErrors.admissionNo = "Admission number is required";
    }
    if ((role === "faculty" || role === "admin") && !loginData.email) {
      newErrors.email = "Email is required";
    }
    return newErrors;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const data = await loginUser(loginData);

      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userId", data.userId);

      if (data.role === "student") {
        localStorage.setItem(
          "studentSession",
          JSON.stringify({
            student: {
              admissionNo: loginData.admissionNo,
              email: data.email || "",
              name: data.name || "",
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl font-bold text-gray-900">CollegeERP</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{role.toUpperCase()} Login</h2>
          <p className="text-gray-600">Sign in to access the {role} dashboard</p>
        </div>

         {/* Login Form */}
        <div className="bg-white py-8 px-6 shadow-xl rounded-xl border">
        <form onSubmit={handleLogin} className="space-y-6">

{role === "student" && (
  <div>
    {errors.admissionNo && (
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-2 flex items-center space-x-2">
        <span className="text-red-700 text-sm">{errors.admissionNo}</span>
      </div>
    )}
    <label
      htmlFor="admissionNo"
      className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      Admission Number <span className="text-red-600">*</span>
    </label>
    <input
      type="text"
      id="admissionNo"
      name="admissionNo"
      value={loginData.admissionNo}
      onChange={handleChange}
      placeholder="Enter Admission Number"
      className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 transition-colors"
    />
  </div>
)}

{(role === "faculty" || role === "admin") && (
  <div>
    {errors.email && (
      <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-2 flex items-center space-x-2">
        {/* <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" /> */}
        <span className="text-red-700 text-sm">{errors.email}</span>
      </div>
    )}
    <label
      htmlFor="email"
      className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      Email <span className="text-red-600">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      value={loginData.email}
      onChange={handleChange}
      placeholder="Enter Email"
      className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 transition-colors"
    />
  </div>
)}

        <div>
  {errors.password && (
    <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-2 flex items-center space-x-2">
      {/* <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" /> */}
      <span className="text-red-700 text-sm">{errors.password}</span>
    </div>
  )}
  <label
    htmlFor="password"
    className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
  >
    Password <span className="text-red-600">*</span>
  </label>
  <input
    type="password"
    id="password"
    name="password"
    value={loginData.password}
    onChange={handleChange}
    placeholder="Enter Password"
    className="appearance-none relative block w-full px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:z-10 transition-colors"
  />
</div>

 <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Forgot password?
                </a>
              </div>
            </div>

          <div className="flex justify-between items-center mt-6 gap-6">
            <button
              type="submit"
           className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Login
            </button>
            {role === "student" && (
              <button
                type="button"
                onClick={() => navigate("/admission-form")}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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



{/* // import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import loginImage from "../assets/abes_login.jpg";
// // import { loginUser } from "../services/authService";

// const loginUser = async (loginData: { admissionNo?: string; email?: string; password: string }) => {
//   await new Promise((r) => setTimeout(r, 500)); // fake async delay

//   if (loginData.password !== "test123") {
//     throw new Error("Invalid password");
//   }

//   if (loginData.admissionNo) {
//     return {
//       token: "dummy-student-token",
//       role: "student",
//       userId: "student-id-123",
//       email: "student@example.com",
//       name: "Test Student",
//     };
//   } else if (loginData.email === "admin@example.com") {
//     return {
//       token: "dummy-admin-token",
//       role: "admin",
//       userId: "admin-id-123",
//       email: "admin@example.com",
//       name: "Admin User",
//     };
//   } else if (loginData.email) {
//     return {
//       token: "dummy-faculty-token",
//       role: "faculty",
//       userId: "faculty-id-123",
//       email: loginData.email,
//       name: "Faculty User",
//     };
//   } else {
//     throw new Error("Invalid login data");
//   }
// };

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Get role from query param (e.g. /login?role=admin)
//   const role = new URLSearchParams(location.search).get("role") || "student";

//   const [loginData, setLoginData] = useState({
//     admissionNo: "",
//     email: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setLoginData({ ...loginData, [name]: value });
//   };

//   // Validate form
//   const validate = () => {
//     let newErrors: Record<string, string> = {};
//     if (!loginData.password) newErrors.password = "Password is required";

//     if (role === "student" && !loginData.admissionNo) {
//       newErrors.admissionNo = "Admission number is required";
//     }
//     if ((role === "faculty" || role === "admin") && !loginData.email) {
//       newErrors.email = "Email is required";
//     }

//     return newErrors;
//   };

//   // Handle Login
//   const handleLogin = async (e: React.FormEvent) => {
//   e.preventDefault();

//   // Validate input before sending to backend
//   const validationErrors = validate(); // your existing validate() function
//   if (Object.keys(validationErrors).length > 0) {
//     setErrors(validationErrors);
//     return;
//   }

//   try {
//     // Call the login service
//     const data = await loginUser(loginData); // loginData = { email/admissionNo, password }

//     // Save token & role in localStorage
//     localStorage.setItem("token", data.token);
//     localStorage.setItem("role", data.role);
//     localStorage.setItem("userId", data.userId);

//     // Redirect user based on role
//     if (data.role === "student") {
//         // Save student session info for Dashboard load
//         localStorage.setItem(
//           "studentSession",
//           JSON.stringify({
//             student: {
//               admissionNo: loginData.admissionNo,
//               email: data.email || "",
//               name: data.name || "",
//               // Add other user props if needed
//             },
//             timestamp: new Date().toISOString(),
//           })
//         );
//         navigate("/student/dashboard");
//       } else if (data.role === "admin") {
//         navigate("/admin/dashboard");
//       } else if (data.role === "faculty") {
//         navigate("/faculty/dashboard");
//       }

//   } catch (err) {
//     console.error(err);
//     alert((err as Error).message || "Server error. Please try again later.");
//   }
// };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen w-full">
//       <img src={loginImage} alt="Login" className="w-full h-full object-cover absolute inset-0" />
//       <div className="absolute inset-0 bg-[#1f2937]/70"></div>
//       <h2 className="absolute text-8xl text-orange-500 top-6 font-bold z-10">ERP Portal</h2>
//       <div className="relative z-20 flex items-center justify-center w-full h-full">
//         <div className="absolute bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
//           <h1 className="text-3xl font-bold text-center mb-6 text-white">{role.toUpperCase()} Login</h1>
//           <form onSubmit={handleLogin} className="space-y-4">
//             {role === "student" && (
//               <div className="flex flex-col space-y-1">
//                 <label className="text-white">
//                   Admission Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="admissionNo"
//                   value={loginData.admissionNo}
//                   onChange={handleChange}
//                   placeholder="Enter Admission Number"
//                   className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
//                 />
//                 {errors.admissionNo && <span className="text-red-400 text-sm">{errors.admissionNo}</span>}
//               </div>
//             )}
//             {(role === "faculty" || role === "admin") && (
//               <div className="flex flex-col space-y-1">
//                 <label className="text-white">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={loginData.email}
//                   onChange={handleChange}
//                   placeholder="Enter Email"
//                   className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
//                 />
//                 {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
//               </div>
//             )}
//             <div className="flex flex-col space-y-1">
//               <label className="text-white">
//                 Password <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="password"
//                 name="password"
//                 value={loginData.password}
//                 onChange={handleChange}
//                 placeholder="Enter Password"
//                 className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
//               />
//               {errors.password && <span className="text-red-400 text-sm">{errors.password}</span>}
//             </div>
//             <div className="flex justify-between items-center mt-6">
//               <button
//                 type="submit"
//                 className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition"
//               >
//                 Login
//               </button>
//               {role === "student" && (
//                 <button
//                   type="button"
//                   onClick={() => navigate("/admission-form")}
//                   className="px-6 py-2 border border-orange-500 text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white transition"
//                 >
//                   New Student?
//                 </button>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage; */}
