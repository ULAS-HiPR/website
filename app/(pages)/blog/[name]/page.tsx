import { getPost } from "@/lib/posts";
import { marked } from "marked";
import Markdown from "react-markdown";

export default async function BlogPage({
  params,
}: {
  params: { name: string };
}) {
  const post = getPost(params.name);
  return (
    <div className="px-20 py-4">
      <h1 className="text-4xl font-bold my-2">
        {post?.title} - {post?.author}
      </h1>
      <h2 className="text-2xl mb-8">
        {post?.date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </h2>
      <Markdown className="prose-xl font-normal">{post?.content}</Markdown>
    </div>
  );
}
