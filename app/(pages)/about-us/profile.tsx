export default function Profile({
  name,
  photo,
  role,
}: {
  name: string;
  photo: string;
  role: string;
}) {
  return (
    <div className="flex flex-col justify-center align-center text-center">
      <img
        className="rounded-lg mb-3 object-cover h-full shadow-lg hover:scale-102 transition duration-80"
        src={photo}
      ></img>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-md font-light">{role}</p>
    </div>
  );
}
