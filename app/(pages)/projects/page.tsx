function ProjectCard({ name }: { name: string }) {
  return (
    <div className="my-8 p-6 w-full h-[400px] border-4 border-white rounded-lg">
      <h1 className="text-3xl pb-2 font-bold">{name}</h1>
      <div>
        <p className="text-lg font-medium">{name}</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="">
      <h1 className="text-5xl mb-8 font-bold">Our Projects</h1>
      <ProjectCard name="Mach-24" />
      <ProjectCard name="TVC" />
      <ProjectCard name="Sionna" />
      <ProjectCard name="Sionna 2" />
      <ProjectCard name="Hybrid Motor" />
    </div>
  );
}
