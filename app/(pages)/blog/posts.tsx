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
import path from "path";
import getConfig from "next/config";
import { Post, getSortedPostsData } from "@/lib/posts";

function BlogPost({ post }: { post: Post }) {
  return (
    <Card key={post.filename} className="my-4">
      <CardHeader>
        <CardTitle className="pb-4">
          {post.title} - {post.date.toDateString()}
        </CardTitle>
        <CardDescription>
          <div className="line-clamp-3">
            <Markdown>{post.content}</Markdown>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end align-end">
        <Link href={""}>
          <Button>Read</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default async function Posts() {
  const posts = await getSortedPostsData();

  if (!posts) return null;

  return (
    <div className="p-4">
      {posts.map((post) => (
        <BlogPost post={post} />
      ))}
    </div>
  );
}
