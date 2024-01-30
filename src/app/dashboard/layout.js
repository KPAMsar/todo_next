// import { useState, useEffect } from "react";
import { http } from "../utils/http";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";

const DashboardLayout = ({ children }, req) => {
  const cookieStore = cookies();
  console.log("cookies", cookieStore);

  return <main>{children}</main>;
};

async function getUser() {
  try {
    const { data } = http("/get-user", "GET");
    return {
      user: data,
      error: null,
    };
  } catch (e) {
    return {
      user: null,
      error,
    };
  }
}

export default DashboardLayout;
