import React from "react";

interface AdminLoginFormProps {
  loginData: { email: string; password: string };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  errors: Record<string, string>;
}

const AdminLoginForm: React.FC<AdminLoginFormProps> = ({ loginData, onChange, onSubmit, errors }) => {
  return (
    <div className="absolute bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">ADMIN Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label className="text-white">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={onChange}
            placeholder="Enter Email"
            className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
          />
          {errors.email && <span className="text-red-400 text-sm">{errors.email}</span>}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-white">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={onChange}
            placeholder="Enter Password"
            className="w-full border border-white rounded p-2 bg-gray-600 text-white focus:border-orange-500 focus:border-2 outline-none"
          />
          {errors.password && <span className="text-red-400 text-sm">{errors.password}</span>}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
