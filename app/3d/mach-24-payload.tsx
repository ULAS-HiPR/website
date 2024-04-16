"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";

function Mach24Payload(props: any) {
  const { scene } = useGLTF("/mach24-payload.glb");
  return (
    <mesh
      position={[1.5, -1, 0.5]}
      rotation={[(Math.PI / 2) * 1.1, Math.PI * 2.2, Math.PI * 1.5]}
      scale={40}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default function Mach24PayloadAnimation() {
  return (
    <div className="h-[700px] -mx-12 ">
      <Canvas
        camera={{
          position: [0, -8, 0],
          fov: 55,
        }}
      >
        <ambientLight intensity={2} />
        <Mach24Payload />
        <OrbitControls
          onChange={(e) => console.log(e?.target.object)}
          makeDefault
        />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
