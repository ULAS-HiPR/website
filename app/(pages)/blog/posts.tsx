import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Post, getSortedPostsData } from "@/lib/posts";
import { marked } from "marked";
import { getBlogs } from "@/lib/getPosts";

function BlogPost({ post }: { post: Post }) {
  const renderer = new marked.Renderer();

  const pattern = /\]\(.*?(.*?)\)/;

  const matches = post.content.match(pattern);

  const imagePath = matches
    ? matches[0].replace("(", "").replace(")", "").replace("]", "")
    : "";

  // Prevent images from being shown in the preview.
  renderer.image = (href, title, text) => {
    return "";
  };

  marked.setOptions({ renderer });
  return (
    <Card className="flex flex-col justify-between border-2">
      <CardHeader>
        <img
          src={imagePath}
          className="mb-6 bt-4 h-[300px] object-cover rounded-lg"
        ></img>
        <CardTitle className="pb-4">
          {post.date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}{" "}
          - {post.title}
        </CardTitle>
        <div className="line-clamp-4 text-gray-300">
          <div
            style={{}}
            dangerouslySetInnerHTML={{ __html: marked(post.content, {}) }}
          />
        </div>
        <Link className="w-full font-bold pt-2" href={`/blog/${post.filename}`}>
          Read more
        </Link>
      </CardHeader>
    </Card>
  );
}

export default async function Posts() {
  // const posts = await getSortedPostsData();
  const posts = await getBlogs();

  if (!posts) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogPost key={post.filename} post={post} />
      ))}
    </div>
  );
}
