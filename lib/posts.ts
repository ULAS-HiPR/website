import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blogs');

export type Post = { filename: string, title: string, content: string, date: Date }

export function getSortedPostsData() {
  // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const mdFileNames = fileNames.filter((filename) => filename.slice(-3) === '.md')
const allPostsData: Post[] = mdFileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const filename = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
        filename,
        title: matterResult.data['title'],
        content: matterResult.content,
      date: new Date(matterResult.data['date'])
    };
  });
    // Sort posts by date
    return allPostsData;
}
