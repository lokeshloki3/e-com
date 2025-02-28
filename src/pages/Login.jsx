import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex flex-col rounded">
        <div className="flex flex-col self-center mt-8 mb-6 px-16 py-6 max-w-full rounded-3xl border border-solid border-[#C1C1C1] w-[576px]">
          <div className="text-center text-3xl font-semibold">Login</div>
          <div className="self-center mt-4 text-xl font-medium">
            Welcome back to ECOMMERCE
          </div>
          <div className="self-center mt-2 text-sm">
            The next gen business marketplace
          </div>

          <form>
            <div className="mt-6">Email</div>
            <div className="flex flex-col mt-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter"
                className="px-2 py-2 rounded-md border border-solid border-[#C1C1C1]"
                required
              />
            </div>

            <div className="mt-6">Password</div>
            <div className="flex flex-col mt-2 relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter"
                className="px-2 py-2 rounded-md border border-solid border-[#C1C1C1]"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute underline right-4 top-1/2 transform -translate-y-1/2 text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center text-white px-8 py-4 mt-10 font-medium bg-black rounded-md border border-black border-solid h-14"
            >
              Login
            </button>
          </form>

          <div className="flex gap-3 self-center mt-8 mb-0 max-w-full w-[261px]">
            <div>Don't have an Account? </div>
            <Link
              to="/signup"
              className="self-start font-medium"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login