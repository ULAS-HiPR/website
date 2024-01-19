export function Profile({
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

export default function TheTeam() {
  return (
    <>
      <h1 className="text-4xl font-bold pb-8">Meet the Team</h1>
      <div className="grid grid-cols-4 gap-12">
        <Profile
          name={"Dervla Gargan"}
          photo={"/dervla.jpeg"}
          role={"CEO + Chief Notionist"}
        />
        <Profile
          name={"Plane 1"}
          photo={
            "https://static01.nyt.com/images/2021/07/15/business/15Economy-briefing-Boeing/merlin_190089537_e9a24c78-a7ab-4155-aada-489a23d618dd-mediumSquareAt3X.jpg"
          }
          role={"Boeing 737"}
        />
        <Profile
          name={"Adam Byrne"}
          photo={"/adam.jpeg"}
          role={"Definitely not looking for a weapons contract ;)"}
        />
        <Profile
          name={"Plane 2"}
          photo={
            "https://aircraft.airbus.com/sites/g/files/jlcbta126/files/styles/airbus_480x480/public/2021-10/A320neo%20Take%20Off.jpg?itok=zQssVG4l"
          }
          role={"Airbus A320 Neo"}
        />
        <Profile
          name={"Conor Callanan"}
          photo={"/conor.jpeg"}
          role={"Website guy"}
        />
      </div>
    </>
  );
}
