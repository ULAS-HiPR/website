"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  OrbitControls,
  useCursor,
  TransformControls,
} from "@react-three/drei";
import { useState } from "react";

function Sionna(props: any) {
  const [rotationValue, setRotationValue] = useState(0);
  useFrame(() => {
    setRotationValue(rotationValue + 0.01);
  });
  const { scene } = useGLTF("/rocket.glb");
  return (
    <mesh
      position={[0, 0, -0.5]}
      rotation={[Math.PI / 2, 1 * rotationValue, 0]}
      scale={0.8}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default function SionnaAnimation() {
  return (
    <div className=" h-[700px] ">
      <Canvas camera={{ position: [0, -8, 0], fov: 10 }}>
        <ambientLight intensity={2} />
        <Sionna />
        <Environment preset="studio" />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
