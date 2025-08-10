'use client'
import React from 'react'

export default function Signup() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Create an account</h2>
        <p className="text-gray-600 mt-2">Sign up to start meeting people — 18+ only.</p>
        <form className="mt-6 space-y-4">
          <input className="w-full p-3 border rounded-lg" placeholder="Full name" />
          <input className="w-full p-3 border rounded-lg" placeholder="Email" />
          <input className="w-full p-3 border rounded-lg" placeholder="Password" type="password" />
          <button className="w-full py-3 rounded-lg bg-primary text-white font-semibold">Create account</button>
        </form>
      </div>
    </div>
  )
}
