import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Create() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your submit logic here
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Create your <br /> PopX account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-[#6C25FF]">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm font-medium text-[#6C25FF]">
              Phone number<span className="text-red-500">*</span>
            </label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#6C25FF]">
              Email address<span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-[#6C25FF]">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Marry Doe"
              required
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Company Name */}
          <div>
            <label className="text-sm font-medium text-[#6C25FF]">Company name</label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Marry Doe"
              className="w-full p-3 border border-gray-300 rounded-md mt-1 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
            />
          </div>

          {/* Agency */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Are you an Agency?<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  onChange={handleChange}
                  checked={formData.isAgency === 'yes'}
                  className="text-[#6C25FF] focus:ring-[#6C25FF]"
                />
                <span className="ml-2 text-sm">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  onChange={handleChange}
                  checked={formData.isAgency === 'no'}
                  className="text-[#6C25FF] focus:ring-[#6C25FF]"
                />
                <span className="ml-2 text-sm">No</span>
              </label>
            </div>
          </div>

          {/* Submit */}
          <Link to =' /setting'
            type="submit"
            className="w-full py-3 rounded-md bg-[#6C25FF] text-white font-medium mt-4"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}
