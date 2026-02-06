"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">
      <header className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2 sm:mb-0">TinyTales</h1>
        <div className="flex space-x-3">
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition text-sm sm:text-base"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
          <button
            className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition text-sm sm:text-base"
            onClick={() => router.push("/register")}
          >
            Sign Up
          </button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row items-center justify-between flex-1 px-4 sm:px-10 md:px-20 py-12 sm:py-16">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Create Magical Stories for Kids Instantly
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Generate AI-powered stories in seconds. Bring imagination to life with TinyTales.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm sm:text-base"
              onClick={() => router.push("/login")}
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition text-sm sm:text-base"
              onClick={() => router.push("/register")}
            >
              Sign Up
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/flat-women-s-day-superwoman-illustration_52683-81107.avif"
            alt="TinyTales Illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t text-xs sm:text-sm">
        © 2026 TinyTales. All rights reserved.
      </footer>
    </div>
  );
}
