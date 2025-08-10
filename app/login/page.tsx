'use client'
import React from 'react'
export default function Login() {
  return (
    <div className="max-w-xl mx-auto p-8">
      <div className="bg-white p-8 rounded-2xl shadow">
        <h2 className="text-2xl font-bold">Welcome back</h2>
        <form className="mt-6 space-y-4">
          <input className="w-full p-3 border rounded-lg" placeholder="Email" />
          <input className="w-full p-3 border rounded-lg" placeholder="Password" type="password" />
          <button className="w-full py-3 rounded-lg bg-primary text-white font-semibold">Sign in</button>
        </form>
      </div>
    </div>
  )
}
