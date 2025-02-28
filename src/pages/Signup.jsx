import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

return (
  <div className="flex flex-col rounded">
    <div className="flex flex-col self-center mt-8 mb-6 px-16 py-6 max-w-full rounded-3xl border border-solid border-[#C1C1C1] w-[576px]">
      <div className="text-center text-3xl font-semibold">
        Create your account
      </div>
      <form >
        <div className="mt-6">Name</div>
        <div className="flex flex-col mt-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter"
            className="px-2 py-2 rounded-md border border-[#C1C1C1]"
            required
          />
        </div>

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
        <div className="flex flex-col mt-2">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter"
            className="px-2 py-2 rounded-md border border-solid border-[#C1C1C1]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center text-white px-8 py-4 mt-10 font-medium bg-black rounded-md border border-black border-solid h-14"
        >
          CREATE ACCOUNT
        </button>
      </form>

      <div className="flex gap-3 self-center mt-8 mb-0 max-w-full w-[202px]">
        <div>Have an Account?</div>
        <Link
          to="/login"
          className="self-start font-medium"
        >
          Login
        </Link>
      </div>
    </div>
  </div>
)
}

export default Signup