import { getBlog } from "@/lib/getPosts";
import { getPost } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function BlogPage({
  params,
}: {
  params: { name: string };
}) {
  const post = getBlog(params.name);
  return (
    <div className="sm:px-20 px-8 py-4">
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
            return (
              <img
                src={src}
                className="h-[400px] w-full object-cover rounded-lg"
              ></img>
            );
          },
          tr(props) {
            const { children } = props;
            return <tr className="grid sm:grid-cols-2 gap-8">{children}</tr>;
          },
          table(props) {
            const { children } = props;
            return <table className="w-full">{children}</table>;
          },
          p(props) {
            const { children } = props;
            return <p className="text-lg">{children}</p>;
          },
        }}
      >
        {post?.content}
      </Markdown>
    </div>
  );
}
