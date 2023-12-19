"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "@/components/Button/Button";
import Link from "next/link";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log(res);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center p-5">
      <form onSubmit={handleForm} className="flex flex-col ">
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-5 text-black rounded border border-pink-400 my-5"
        />
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-5 text-black rounded border border-pink-400 my-5"
        />
        <Button>Login</Button>
        <Link href="/signup" className="text-center text-blue-400">
          New User?
        </Link>
      </form>
    </div>
  );
}

export default Login;
