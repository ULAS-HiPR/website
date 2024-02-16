import Posts from "./posts";

export default function Blog() {
  return (
    <div className="sm:px-12 px-8 pb-14">
      <h1 className="text-4xl font-bold pb-8">Updates</h1>
      <Posts />
    </div>
  );
}
