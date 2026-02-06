"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/image.png" // replace with your image path
          alt="Footer Background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70" /> {/* dark overlay */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
        {/* Column 1: Let Us Help */}
        <div className="space-y-6">
          <h5 className="text-2xl font-semibold">Let Us Help</h5>
          <ul className="space-y-2 text-gray-300">
            <li>My Account</li>
            <li>FAQs</li>
            <li>Categories</li>
            <li>All Products</li>
          </ul>
        </div>

        {/* Column 2: Policies */}
        <div className="space-y-6">
          <h5 className="text-2xl font-semibold">Policies</h5>
          <ul className="space-y-2 text-gray-300">
            <li>Refund Policy</li>
            <li>About Us</li>
            <li>Cancellation Policy</li>
            <li>Terms and Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3: Send Email */}
        <div className="space-y-6">
          <h5 className="text-2xl font-semibold">Send Email</h5>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-black focus:outline-none"
            />
            <button className="bg-[#BE968E] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Send
            </button>
          </div>
        </div>

        {/* Column 4: Follow Us */}
        <div className="space-y-6">
          <h5 className="text-2xl font-semibold">Follow Us</h5>
          <div className="flex gap-4">
            {/* Replace with your social icons or Image components */}
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">F</div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">T</div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">I</div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">L</div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">W</div>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black cursor-pointer">TG</div>
          </div>
        </div>
      </div>

      {/* Optional bottom note */}
      <div className="relative text-gray-400 text-sm text-center py-4">
        © 2026 Your Company. All rights reserved.
      </div>
    </footer>
  );
}
