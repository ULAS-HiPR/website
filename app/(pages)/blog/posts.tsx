import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { promises as fs } from "fs";
import { Button } from "@/components/ui/button";
import Markdown from "react-markdown";
import { Post, getSortedPostsData } from "@/lib/posts";
import { marked } from "marked";

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
    <Card className="mx-10 flex flex-col justify-between">
      <CardHeader>
        <img
          src={imagePath}
          className="mx-auto h-[300px] w-[700px] object-cover rounded-lg"
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
  const posts = await getSortedPostsData();

  if (!posts) return null;

  return (
    <div className="grid sm:grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogPost key={post.filename} post={post} />
      ))}
    </div>
  );
}
