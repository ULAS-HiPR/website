import {
  S3Client,
  GetObjectCommand,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
import matter from "gray-matter";

export type Post = {
  filename: string;
  title: string;
  content: string;
  date: Date;
  author: string;
};

function formatImagesIntoTable(images: string[]) {
  let content = "\n\n| ";

  images.forEach((image) => {
    content += `![](${image}) | `;
  });
  content += "\n| ";
  images.forEach((_) => {
    content += ` :----------------------------------------: |`;
  });

  return content;
}

let parsedBlogs: Post[] = [];

export async function getBlogs() {
  const s3Client = new S3Client({
    region: "eu-west-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY!,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
    },
  });
  const bucketName = "ulas-hipr-bucket";

  const { Contents } = await s3Client.send(
    new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: "blogs/",
    })
  );

  const images = Contents?.map((path) => {
    const regex = /blogs\/.*?\/.*?.(jpg|jpeg|png|gif|bmp|svg)/;
    const match = path.Key?.match(regex);
    if (match) {
      return match[0];
    }
  });

  const items = Contents?.map((item) => item.Key);
  let pattern = /blogs\/.*?\//g;

  const blogPaths = [
    //@ts-expect-error
    ...new Set(items?.map((item) => item?.match(pattern)![0])),
  ];

  const blogImageMap: { [key: string]: string[] } = {};

  blogPaths.forEach((path: string) => {
    const matchedImages = images?.filter(
      (imagePath) => imagePath && imagePath.indexOf(path) > -1
    );

    const imageURLs = matchedImages?.map(
      (image) => "https://ulas-hipr-bucket.s3.eu-west-1.amazonaws.com/" + image
    );

    blogImageMap[path] = imageURLs || [];
  });

  const blogs = await Promise.all(
    blogPaths?.map(async (blogPath: string) => {
      const { Body } = await s3Client.send(
        new GetObjectCommand({
          Bucket: bucketName,
          Key: blogPath + "blog.md",
        })
      );
      const bodyString = await Body?.transformToString();
      const matterResult = matter(bodyString!);

      const dateString = matterResult.data["date"];
      const [year, month, day] = dateString.split("-");
      const date = new Date(year, month - 1, day);

      const filename = blogPath.replace("blogs/", "").replace("/", "");

      const content =
        matterResult.content + formatImagesIntoTable(blogImageMap[blogPath]);

      return {
        filename,
        title: matterResult.data["title"],
        author: matterResult.data["author"],
        content,
        date: date,
      };
    }) || []
  );

  console.log(blogs[0].content);

  parsedBlogs = blogs;

  return blogs;
}

export function getBlog(path: string) {
  console.log(path);
  return parsedBlogs.find((blog) => {
    blog.filename == path;
  });
}
