import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "blogs");

export type Post = {
  filename: string;
  title: string;
  content: string;
  date: Date;
  author: string;
};

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const mdFileNames = fileNames.filter(
    (filename) => filename.slice(-3) === ".md"
  );
  const allPostsData: Post[] = mdFileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const filename = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const dateString = matterResult.data["date"];
    const [year, month, day] = dateString.split("-");
    const date = new Date(year, month - 1, day);

    // Combine the data with the id
    return {
      filename,
      title: matterResult.data["title"],
      author: matterResult.data["author"],
      content: matterResult.content,
      date: date,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getPost(fileName: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  const mdFileNames = fileNames.filter(
    (filename) => filename.slice(-3) === ".md"
  );
  const filePath = mdFileNames.find((name) => name.slice(0, -3) === fileName);

  if (!filePath) return;

  const fullFilePath = path.join(postsDirectory, filePath);
  const fileContents = fs.readFileSync(fullFilePath, "utf8");

  const matterResult = matter(fileContents);

  const dateString = matterResult.data["date"];
  const [year, month, day] = dateString.split("-");
  const date = new Date(year, month - 1, day);

  return {
    fileName,
    title: matterResult.data["title"],
    author: matterResult.data["author"],
    content: matterResult.content,
    date: date,
  };
}
