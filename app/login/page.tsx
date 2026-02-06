"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    name: string;
    email: string;
    mobile: string;
    email_verified_at: string | null;
  };
}

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post<LoginResponse>(
        "https://tinytales.trendline.marketing/api/auth/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (res.data.status) {
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("name", res.data.data.name);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("mobile", res.data.data.mobile);

        router.push("/dashboard");
      } else {
        alert(res.data.message || "Login failed. Check your credentials.");
      }
    } catch (err: unknown) {
      const axiosError = err as { response?: { data?: any }; message: string };
      console.error(
        "Login Error:",
        axiosError.response?.data
          ? JSON.stringify(axiosError.response.data)
          : axiosError.message
      );
      alert(
        axiosError.response?.data?.message ||
        "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
        />

        {/* Submit Button */}
        <button
          onClick={submit}
          disabled={loading}
          className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="mt-4 text-gray-400 text-center text-sm">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
