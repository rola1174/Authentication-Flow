"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verify() {
  const router = useRouter();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      if (code === "123456") {
        router.push("/login"); 
      } else {
        setError("Wrong verification code. Please try again.");
      }
      setLoading(false);
    }, 500); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-purple-400 text-center">
          Verify Account
        </h2>

        <input
          placeholder="Enter Verification Code"
          className="mb-4 p-3 rounded-lg w-full bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <button
          className="w-full px-4 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition disabled:opacity-50"
          onClick={submit}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <p className="mt-4 text-gray-400 text-center text-sm">
          Didn't receive the code?{" "}
          <span
            onClick={() => alert("Resend code feature coming soon")}
            className="text-purple-400 cursor-pointer hover:underline"
          >
            Resend
          </span>
        </p>
      </div>
    </div>
  );
}