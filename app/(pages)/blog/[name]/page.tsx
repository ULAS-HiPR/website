import { getPost } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function BlogPage({
  params,
}: {
  params: { name: string };
}) {
  const post = getPost(params.name);
  return (
    <div className="px-20 py-4">
      <h1 className="text-4xl font-bold my-2">
        {post?.title} {post?.author ? "- " + post?.author : ""}
      </h1>
      <h2 className="text-2xl mb-8">
        {post?.date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </h2>
      {/* <BlogPost content={post?.content!} /> */}
      <Markdown
        className="whitespace-pre-wrap"
        remarkPlugins={[remarkGfm]}
        components={{
          img(props) {
            const { src } = props;
            return <img src={src} className="h-[400px] rounded-lg my-4"></img>;
          },
          th(props) {
            const { children } = props;
            return <th className="py-4 pr-8">{children}</th>;
          },
        }}
      >
        {post?.content}
      </Markdown>
    </div>
  );
}
