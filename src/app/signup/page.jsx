"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({ email, password })
    if (error) {
      alert(error.message)
    } else {
      alert("Signup successful! Check your email for confirmation.")
      router.push("/login")
    }
    setLoading(false)
  }

  const handleOAuthSignup = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) alert(error.message)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#232224]">
      <div className="bg-[#333232] p-8 rounded-2xl shadow-md w-[25vw] max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h1>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm text-[#e3a458]">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-600 text-white border border-[#a26833]"
              required
            />
          </div>
          <div>
            <label className="block text-sm text-[#e3a458]">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded bg-gray-600 text-white border border-[#a26833]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#a26833] hover:bg-[#523122] text-white py-2 rounded"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-6 space-y-3">
          <button
            onClick={() => handleOAuthSignup("google")}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
          >
            Continue with Google
          </button>
          <button
            onClick={() => handleOAuthSignup("facebook")}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Continue with Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-[#e3a458] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
