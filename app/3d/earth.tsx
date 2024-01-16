import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

function Earth(props: any) {
  const [rotationValue, setRotationValue] = useState(0);
  useFrame(() => {
    console.log("RAN");
    setRotationValue(rotationValue + 0.001);
  });
  const { scene } = useGLTF("/moon.glb");
  return (
    <mesh rotation={[rotationValue, (Math.PI / 2) * rotationValue, 0]}>
      <primitive object={scene} {...props} />
    </mesh>
  );
}

export default function EarthAnimation() {
  return (
    <div className="absolute w-full h-[700px] ">
      <Canvas camera={{ position: [0, 0, -1000], fov: 10 }}>
        <ambientLight intensity={1} />
        <Earth position={[-0.1, -1.3, 0]} scale={0.15} />
        <Environment preset="dawn" />
        <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
