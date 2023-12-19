"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NavBar() {
  const [user, setUser] = useState("");
  const router = useRouter();
  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get("/api/me");

        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  const handleLogOut = async () => {
    await axios.get("/api/logout");
    router.push("/login");
  };
  return (
    <header className="flex items-center justify-center bg-pink-500 text-white p-5 gap-5 ">
      <Image src="/panda.png" alt="logo" width={50} height={50} />
      <Link href="/">Blog app</Link>
      <input
        type="text"
        placeholder="Search Post..."
        className="p-2 rounded-lg text-black"
      />

      <Link
        href="/post/new"
        className="transition-transform transform hover:scale-105"
      >
        Create Post
      </Link>
      <Link
        href="/post/new"
        className="transition-transform transform hover:scale-105"
      ></Link>
      <button
        className="transition-transform transform hover:scale-105"
        onClick={handleLogOut}
      >
        Log Out
      </button>
      {user && (
        <button className="transition-transform transform hover:scale-105">
          {user.email}
        </button>
      )}
    </header>
  );
}

export default NavBar;
