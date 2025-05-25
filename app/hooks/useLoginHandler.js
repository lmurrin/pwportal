"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useLoginHandler() {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (email, password) => {
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/");
    }
  };

  return { handleLogin, error };
}
