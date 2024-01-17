"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";

function Rocket(props: any) {
  const { scene } = useGLTF("/rocket.glb");
  return <primitive object={scene} {...props} />;
}

export default function RocketAnimation() {
  return (
    <div className="absolute w-full h-[700px] ">
      <Canvas camera={{ position: [0, 10, -10], fov: 10 }}>
        <ambientLight intensity={1} />
        <Rocket
          position={[-0.1, -1.3, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={2}
        />
        <Environment preset="city" />
        {/* <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        /> */}
      </Canvas>
    </div>
  );
}
