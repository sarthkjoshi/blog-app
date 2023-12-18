import Edit from "@/components/Edit/Edit";
import Delete from "@/components/Delete/Delete";
const getData = async (id) => {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  return response.json();
};

async function Post({ params }) {
  const post = await getData(params.id);

  return (
    <div className="p-5">
      {post && (
        <div className="p-3">
          <h2 className="text-pink-700 text-lx font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </div>
      )}
      <div className="flex gap-4">
        {post && <Edit id={params.id} />}
        {post && <Delete id={params.id} />}
      </div>
    </div>
  );
}
export default Post;
