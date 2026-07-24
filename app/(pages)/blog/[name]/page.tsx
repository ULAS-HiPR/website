import { withBasePath } from "@/lib/base-path";
import { getPost, getSortedPostsData } from "@/lib/posts";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return getSortedPostsData().map((post) => ({ name: post.filename }));
}

export const dynamicParams = false;

export default async function BlogPage({
  params,
}: {
  params: { name: string };
}) {
  const post = getPost(params.name);
  return (
    <main className="min-h-svh bg-black px-6 pb-24 pt-32 text-white sm:px-10 lg:px-12">
      <article className="mx-auto max-w-5xl">
      <h1 className="my-2 text-4xl font-bold uppercase tracking-[-0.01em] sm:text-6xl">
        {post?.title} {post?.author ? "- " + post?.author : ""}
      </h1>
      <h2 className="mb-10 mt-4 text-sm uppercase tracking-[0.12em] text-white/45">
        {post?.date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </h2>
      {/* <BlogPost content={post?.content!} /> */}
      <Markdown
        className="whitespace-pre-wrap text-white/72"
        remarkPlugins={[remarkGfm]}
        components={{
          img(props) {
            const { src } = props;
            return (
              <img
                src={typeof src === "string" ? withBasePath(src) : src}
                alt={props.alt ?? ""}
                className="my-10 max-h-[760px] w-full object-cover"
              ></img>
            );
          },
          tr(props) {
            const { children } = props;
            return <tr className="grid sm:grid-cols-2 gap-8">{children}</tr>;
          },
          table(props) {
            const { children } = props;
            return <table className="w-full [&_img]:my-0">{children}</table>;
          },
          p(props) {
            const { children } = props;
            return <p className="my-5 text-lg leading-8">{children}</p>;
          },
        }}
      >
        {post?.content}
      </Markdown>
      </article>
    </main>
  );
}
