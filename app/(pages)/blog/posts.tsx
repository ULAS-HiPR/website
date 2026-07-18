import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Post, getSortedPostsData } from "@/lib/posts";

function postImage(content: string) {
  const match = content.match(/!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/);
  return match?.[1] ?? "/hero-earth.png";
}

function postExcerpt(content: string) {
  return content
    .replace(/!\[[^\]]*\]\([^)]+\)/g, " ")
    .replace(/\|[^\n]+\|/g, " ")
    .replace(/[#>*_`\[\]-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 230);
}

function PostDate({ date }: { date: Date }) {
  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })}
    </time>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  return (
    <article className="grid overflow-hidden bg-black text-white lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative min-h-[440px] lg:min-h-[570px]">
        <Image
          src={postImage(post.content)}
          alt=""
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/55">
          Latest update · <PostDate date={post.date} />
        </p>
        <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
          {post.title}
        </h2>
        <p className="mt-7 leading-8 text-white/68">
          {postExcerpt(post.content)}…
        </p>
        <Link
          href={`/blog/${post.filename}`}
          className="group mt-9 inline-flex items-center gap-3 font-semibold"
        >
          Read update
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
}

function BlogPost({ post }: { post: Post }) {
  return (
    <article className="group border-b border-white/15 pb-10">
      <Link href={`/blog/${post.filename}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#090909]">
          <Image
            src={postImage(post.content)}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
          />
        </div>
        <p className="mt-5 text-xs font-medium uppercase tracking-[0.08em] text-white/40">
          <PostDate date={post.date} />
        </p>
        <h2 className="mt-3 text-2xl font-semibold leading-snug">{post.title}</h2>
        <p className="mt-4 line-clamp-3 leading-7 text-white/58">
          {postExcerpt(post.content)}…
        </p>
        <span className="mt-6 inline-flex items-center gap-3 font-semibold">
          Read more
          <ArrowRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </Link>
    </article>
  );
}

export default async function Posts() {
  const posts = getSortedPostsData();
  const [latest, ...archive] = posts;

  if (!latest) return null;

  return (
    <section className="mx-auto max-w-[1500px] bg-black px-6 py-16 text-white sm:px-10 lg:px-12 lg:py-24">
      <FeaturedPost post={latest} />

      {archive.length ? (
        <>
          <div className="mb-10 mt-20 flex items-end justify-between border-b border-white/15 pb-6">
            <h2 className="text-3xl font-semibold">All updates</h2>
            <span className="text-sm text-white/40">{archive.length} stories</span>
          </div>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((post) => (
              <BlogPost key={post.filename} post={post} />
            ))}
          </div>
        </>
      ) : null}
    </section>
  );
}
