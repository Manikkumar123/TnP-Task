"use client"
export default function Footer() {
  return (
    <footer className="bg-[#7f3b2d] text-[#e3d3bc] font-sans relative h-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
        <div>
          <img src="/images/logo.png" alt="Logo" className="h-16 mb-4" />
          <p className="text-sm leading-relaxed text-[#faeade]">
            Training & Placement Cell – bridging students and industry with the
            best opportunities.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#e3a458] mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Announcements</a></li>
            <li><a href="#" className="hover:text-white transition">Login</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#e3a458] mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:placement@college.com" className="hover:text-white">placement@college.com</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-white">+91 12345 67890</a></li>
            <li>Address: Training & Placement Cell, XYZ College, India</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#e3a458] mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.508 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33V21.88C18.343 21.128 22 17 22 12z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.633 7.997c.013.175.013.35.013.524 0 5.35-4.073 11.52-11.52 11.52-2.29 0-4.418-.675-6.207-1.843.324.038.636.05.972.05a8.1 8.1 0 0 0 5.034-1.734 4.07 4.07 0 0 1-3.797-2.82c.249.037.498.062.76.062.36 0 .722-.05 1.06-.137a4.065 4.065 0 0 1-3.263-3.99v-.05c.547.299 1.18.486 1.85.511a4.06 4.06 0 0 1-1.812-3.384c0-.748.199-1.434.548-2.033a11.54 11.54 0 0 0 8.37 4.24 4.573 4.573 0 0 1-.1-.93 4.066 4.066 0 0 1 7.034-2.78 7.946 7.946 0 0 0 2.579-.986 4.05 4.05 0 0 1-1.787 2.245 8.136 8.136 0 0 0 2.343-.636 8.6 8.6 0 0 1-2.04 2.11z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.984 3.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM.75 8.25h4.5v12h-4.5v-12zM8.25 8.25h4.312v1.64h.062c.601-1.14 2.07-2.344 4.268-2.344 4.564 0 5.406 3 5.406 6.906v7.797h-4.5v-6.922c0-1.653-.03-3.781-2.312-3.781-2.312 0-2.669 1.807-2.669 3.672v7.031h-4.5v-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#523122] text-center py-4 text-sm text-[#faeade]">
        © {new Date().getFullYear()} Training & Placement Cell. All rights reserved.
      </div>
    </footer>
  )
}
