import Link from "next/link";
import Button from "../Button/Button";
function Edit({ id }) {
  return (
    <div>
      <Link href={`/post/${id}/edit`}>
        <Button>Edit</Button>
      </Link>
    </div>
  );
}

export default Edit;
