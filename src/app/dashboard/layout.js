"use client";
import { http } from "../utils/http";
// import { NextRequest } from "next/server";
// import { cookies } from "next/headers";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }, req) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const authenticated = sessionStorage.getItem("access_token") !== null;
    setIsAuthenticated(authenticated !== null);

    if (!authenticated) {
      window.location.replace("/login");
    }
  });
  return isAuthenticated ? <main>{children}</main> : <p>Loading...</p>;
};

export default DashboardLayout;
