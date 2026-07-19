"use client";

import {
  Bounds,
  Center,
  ContactShadows,
  Environment,
  Lightformer,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import {
  mergeVertices,
  toCreasedNormals,
} from "three/examples/jsm/utils/BufferGeometryUtils.js";

function StageFloor() {
  const lightPool = useMemo(() => {
    if (typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");
    if (!context) return null;

    const gradient = context.createRadialGradient(256, 256, 8, 256, 256, 250);
    gradient.addColorStop(0, "rgba(255, 250, 238, 0.72)");
    gradient.addColorStop(0.34, "rgba(235, 239, 244, 0.42)");
    gradient.addColorStop(0.72, "rgba(180, 190, 204, 0.12)");
    gradient.addColorStop(1, "rgba(120, 130, 145, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  useEffect(() => () => lightPool?.dispose(), [lightPool]);

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.05, 0]} receiveShadow>
        <planeGeometry args={[24, 24]} />
        <meshStandardMaterial color="#24272b" metalness={0.08} roughness={0.82} />
      </mesh>

      {lightPool ? (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.035, 0]}>
          <circleGeometry args={[3.35, 96]} />
          <meshBasicMaterial
            map={lightPool}
            transparent
            opacity={0.72}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ) : null}

      <ContactShadows
        position={[0, -2.02, 0]}
        opacity={0.94}
        scale={7.2}
        blur={2.5}
        far={3.8}
        color="#000000"
      />
    </>
  );
}

function DeploymentModel({
  reduceMotion,
  sectioned,
}: {
  reduceMotion: boolean;
  sectioned: boolean;
}) {
  const { scene: exteriorScene } = useGLTF(
    "/controls/co2/co2-deployment.glb?v=2"
  );
  const deployment = useMemo(() => exteriorScene.clone(true), [exteriorScene]);
  const group = useRef<THREE.Group>(null);
  const sectionPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, -1), 0),
    []
  );

  const aluminium = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color: "#c5cacf",
        metalness: 0.88,
        roughness: 0.25,
        clearcoat: 0.22,
        clearcoatRoughness: 0.2,
        envMapIntensity: 1.5,
        side: THREE.DoubleSide,
        clipShadows: true,
      }),
    []
  );

  useEffect(() => {
    const smoothedGeometries: THREE.BufferGeometry[] = [];

    deployment.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const merged = mergeVertices(child.geometry.clone(), 1e-4);
        const smoothed = toCreasedNormals(merged, Math.PI / 4);
        if (smoothed !== merged) merged.dispose();
        child.geometry = smoothed;
        smoothedGeometries.push(smoothed);
        child.material = aluminium;
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    return () => smoothedGeometries.forEach((geometry) => geometry.dispose());
  }, [aluminium, deployment]);

  useEffect(() => () => aluminium.dispose(), [aluminium]);

  useEffect(() => {
    aluminium.clippingPlanes = sectioned ? [sectionPlane] : [];
    aluminium.needsUpdate = true;
  }, [aluminium, sectionPlane, sectioned]);

  useFrame((_, delta) => {
    if (!group.current) return;

    if (!reduceMotion && !sectioned) {
      group.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Center>
        <primitive
          object={deployment}
          scale={0.023}
        />
      </Center>
    </group>
  );
}

export default function CO2Deployment({ className = "" }: { className?: string }) {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [sectioned, setSectioned] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <div className={`relative bg-transparent ${className}`}>
      <div className="absolute right-5 top-5 z-10 flex border border-white/18 bg-black/72 p-1 text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm sm:right-7 sm:top-7 lg:top-24">
        <button
          type="button"
          aria-pressed={!sectioned}
          onClick={() => setSectioned(false)}
          className={`px-3 py-2 transition-colors ${
            !sectioned
              ? "bg-white text-black"
              : "text-white/52 hover:text-white"
          }`}
        >
          Exterior
        </button>
        <button
          type="button"
          aria-pressed={sectioned}
          onClick={() => setSectioned(true)}
          className={`px-3 py-2 transition-colors ${
            sectioned
              ? "bg-white text-black"
              : "text-white/52 hover:text-white"
          }`}
        >
          Y–X section
        </button>
      </div>

      <Canvas
        className="pointer-events-none"
        shadows
        camera={{ position: [0, 0.72, 5.15], fov: 31 }}
        dpr={[1, 1.75]}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.localClippingEnabled = true;
        }}
      >
        <ambientLight intensity={0.24} />
        <spotLight
          castShadow
          position={[-2.7, 5.8, 3.8]}
          intensity={185}
          angle={0.4}
          penumbra={0.72}
          shadow-bias={-0.00015}
        />
        <spotLight
          position={[4, 1.8, 3]}
          intensity={86}
          angle={0.44}
          penumbra={1}
          color="#b9dcff"
        />
        <spotLight
          position={[-3, -0.4, 3]}
          intensity={54}
          angle={0.48}
          penumbra={1}
          color="#ffd8c8"
        />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.5}>
            <DeploymentModel
              reduceMotion={reduceMotion}
              sectioned={sectioned}
            />
          </Bounds>
          <Environment resolution={128}>
            <Lightformer intensity={5} position={[0, 4, 3]} scale={[7, 0.35, 1]} />
            <Lightformer
              intensity={3}
              position={[-4, 0, 2]}
              rotation-y={Math.PI / 2}
              scale={[5, 0.5, 1]}
            />
            <Lightformer
              intensity={4}
              position={[4, 0, 1]}
              rotation-y={-Math.PI / 2}
              scale={[5, 0.3, 1]}
            />
          </Environment>
        </Suspense>

        <StageFloor />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/controls/co2/co2-deployment.glb?v=2");
