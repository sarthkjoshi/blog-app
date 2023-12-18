"use client";
import axios from "axios";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

function Delete({ id }) {
  const router = useRouter();
  const handleClick = async () => {
    await axios.delete(`/api/post/${id}`);
    router.push("/");
  };
  return (
    <div>
      <Button onClick={handleClick}>Delete</Button>
    </div>
  );
}

export default Delete;
