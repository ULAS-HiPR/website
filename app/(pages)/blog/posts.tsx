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

  // Prevent images from being shown in the preview.
  renderer.image = (href, title, text) => {
    return "";
  };

  marked.setOptions({ renderer });
  return (
    <Card>
      <CardHeader>
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
      </CardHeader>
      <CardFooter className="flex justify-between align-end">
        <p className="font-bold">{post.author}</p>
        <Link href={`/blog/${post.filename}`}>
          <Button>Read</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default async function Posts() {
  const posts = await getSortedPostsData();

  console.log(posts);

  if (!posts) return null;

  return (
    <div className="grid grid-cols-2 gap-8">
      {posts.map((post) => (
        <BlogPost key={post.filename} post={post} />
      ))}
    </div>
  );
}
