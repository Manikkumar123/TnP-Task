export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#232224] font-[Antonio,sans-serif] px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-white tracking-wide">
          Login
        </h1>
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-[#e3a458] mb-1">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full h-12 rounded-lg border border-[#a26833]/50 bg-white/20 text-white placeholder-gray-300 focus:border-[#e3a458] focus:ring-[#e3a458] px-3 sm:text-sm"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#e3a458] mb-1">
              Password
            </label>
            <input
              type="password"
              className="mt-1 block w-full h-12 rounded-lg border border-[#a26833]/50 bg-white/20 text-white placeholder-gray-300 focus:border-[#e3a458] focus:ring-[#e3a458] px-3 sm:text-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-[#7f3b2d]/90 text-white py-3 px-4 rounded-lg hover:bg-[#523122] transition duration-300 shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-300">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-[#e3a458] hover:text-[#a26833] font-medium transition"
          >
            Sign up
          </a>
        </p>
      </div>
    </main>
  );
}
