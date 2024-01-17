import Profile from "./profile";

export default function AboutUs() {
  return (
    <div>
      <h1 className="text-4xl font-bold pb-8">Meet the Team</h1>
      <div className="grid grid-cols-4 gap-12">
        <Profile
          name={"Dervla Gargan"}
          photo={"/dervla.jpeg"}
          role={"CEO + Chief Debosser"}
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
          role={"Web3 Specialist"}
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
    </div>
  );
}
