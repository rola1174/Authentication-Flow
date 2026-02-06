"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  mobile: string;
  mobile_country_code: string;
}

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobile: "",
    mobile_country_code: "971",
  });
  const [loading, setLoading] = useState(false);

  const submit = async () => {
    // Frontend validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword || !form.mobile) {
      alert("Please fill all fields correctly");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await api.post("/auth/register", {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        mobile_country_code: form.mobile_country_code,
        password: form.password,
        password_confirmation: form.confirmPassword,
        type: "client",
        fcm_token: "test",
      });
      router.push("/verify");
    } catch (err: any) {
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">Register</h2>

        <input
          placeholder="Full Name"
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Email"
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          placeholder="Mobile"
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />

        <input
          placeholder="Country Code"
          className="mb-6 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          value={form.mobile_country_code}
          onChange={(e) => setForm({ ...form, mobile_country_code: e.target.value })}
        />

        <button
          className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition disabled:opacity-50"
          onClick={submit}
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="mt-4 text-gray-400 text-center text-sm">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
