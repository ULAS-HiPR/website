"use client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { LegacyRef, useEffect, useRef, useState } from "react";

function Moon(props: any) {
  const [rotationValue, setRotationValue] = useState(0);
  useFrame(() => {
    setRotationValue(rotationValue + 0.001);
  });
  const { scene } = useGLTF("/moon.glb");
  return (
    <mesh rotation={[-rotationValue, (Math.PI / 2) * rotationValue, 0]}>
      <primitive object={scene} {...props} />
    </mesh>
  );
}

export default function MoonAnimation({
  scrollDistance,
}: {
  scrollDistance: number;
}) {
  return (
    <div className="absolute w-full h-full ">
      <Canvas camera={{ position: [0, -30, -200], fov: 10 }}>
        <ambientLight intensity={1} />
        <Moon
          position={[-0.1, -1.3, 0]}
          scale={0.3 - 0.3 * (scrollDistance / 800)}
        />
        <Environment preset="forest" />
        <OrbitControls
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Canvas>
    </div>
  );
}
