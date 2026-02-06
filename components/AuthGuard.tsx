"use client";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default function AuthGuard({ children }: Props) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, []);

  return <>{children}</>;
}
