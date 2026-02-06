"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import AuthGuard from "@/components/AuthGuard";

interface UserData {
  name: string;
  email: string;
  email_verified_at: string | null;
}

interface UserDataResponse {
  status: boolean;
  message: string;
  data: UserData;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    (async () => {
      try {
        const res = await axios.get<UserDataResponse>(
          "https://tinytales.trendline.marketing/api/auth/user-data",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );
        if (res.data.status) {
          setUser(res.data.data);
        } else {
          router.push("/login");
        }
      } catch {
        router.push("/login");
      } finally {
        setLoading(false);
      }
    })();
  }, [router]);

  const logout = () => {
    localStorage.clear();
    router.push("/login");
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Loading...</p>
      </div>
    );

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-900 p-4 sm:p-6 md:p-8 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-500 mb-2 sm:mb-0">
            Welcome, {user?.name}
          </h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition text-sm sm:text-base"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-gray-800 shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-purple-300">Your Profile</h2>
            <p className="text-gray-300 text-center text-sm sm:text-base">
              Name: {user?.name} <br />
              Email: {user?.email}
            </p>
          </div>

          <div className="bg-gray-800 shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-purple-300">Stats</h2>
            <p className="text-gray-300 text-center text-sm sm:text-base">Coming soon...</p>
          </div>

          <div className="bg-gray-800 shadow-md rounded-lg p-4 sm:p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 text-purple-300">Notifications</h2>
            <p className="text-gray-300 text-center text-sm sm:text-base">No new notifications</p>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}
