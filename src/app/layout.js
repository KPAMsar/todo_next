"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  console.log(sessionStorage.getItem("access_token"));
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("access_token") !== null;

    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>

      <ToastContainer />
    </html>
  );
}
