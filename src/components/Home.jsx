import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex items-end justify-center min-h-screen bg-[#F9F9F9] px-4">
    <div className="w-full max-w-sm pb-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link
        to="/create"
        className="w-full block text-center py-3 rounded-md bg-[#6C25FF] text-white font-medium mb-3"
      >
        Create Account
      </Link>
      <Link
        to="/signup"
        className="w-full block text-center py-3 rounded-md bg-[#E5D4FA] text-[#6C25FF] font-medium"
      >
        Already Registered? Login
      </Link>
    </div>
  </div>
  )
}
