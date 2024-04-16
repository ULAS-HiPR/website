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
import THREE from "three";

function Mach24Payload(props: any) {
  const { scene } = useGLTF("/mach24-payload.glb");
  return (
    <mesh
      position={[0.05, 0, 0.1]}
      rotation={[(Math.PI / 2) * 0.7, 0.2, 0]}
      scale={5}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default function Mach24PayloadAnimation() {
  return (
    <div className="h-[700px] -mx-12 ">
      <Canvas camera={{ position: [0, -8, 0], fov: 10 }}>
        <ambientLight intensity={2} />
        <Mach24Payload />
        <Environment preset="studio" />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
