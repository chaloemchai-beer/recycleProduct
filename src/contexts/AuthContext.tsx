"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Role = "guest" | "seller" | "user";

interface AuthContextValue {
  role: Role;
  setRole: (r: Role) => void;
}

const AuthContext = createContext<AuthContextValue>({
  role: "guest",
  setRole: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<Role>("guest");

  useEffect(() => {
    const saved = (localStorage.getItem("role") as Role) || "guest";
    setRoleState(saved);
  }, []);

  const setRole = (r: Role) => {
    localStorage.setItem("role", r);
    setRoleState(r);
  };

  return (
    <AuthContext.Provider value={{ role, setRole }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
