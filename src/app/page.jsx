import Link from "next/link";

const getData = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  return response.json();
};
export default async function Home() {
  const posts = await getData();

  return (
    <main className="p-3 overflow-scroll ">
      {posts.map((p) => {
        return (
          <li
            key={p._id}
            className="flex flex-col items-center justify-center mt-5 shadow-md rounded-md p-10  transition-transform transform hover:scale-105"
          >
            <Link href={`/post/${p._id}`}>
              <h2 className="text-pink-700 text-xl font-bold">{p.title}</h2>
            </Link>
            <p>{p.content}</p>
          </li>
        );
      })}
    </main>
  );
}
