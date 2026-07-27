"use client";

import { Bounds, Center, ContactShadows, Environment, Lightformer, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Component, Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { ErrorInfo, ReactNode } from "react";
import * as THREE from "three";
import { withBasePath } from "@/lib/base-path";

function PreviewFallback() {
  return (
    <div className="flex h-full min-h-[600px] items-center justify-center px-8 text-center">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-white/48">
          Engine 3D preview
        </p>
        <p className="mt-3 max-w-xs text-sm leading-6 text-white/38">
          Interactive preview unavailable on this device.
        </p>
      </div>
    </div>
  );
}

class PreviewErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Luin preview failed", error, info);
  }

  render() {
    return this.state.failed ? <PreviewFallback /> : this.props.children;
  }
}

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

function EngineModel({ reduceMotion, sectioned }: { reduceMotion: boolean; sectioned: boolean }) {
  const { scene } = useGLTF(withBasePath("/luin-engine.glb?v=6"));
  const { engine, materials } = useMemo(() => {
    const clone = scene.clone(true);
    const materialClones = new Map<THREE.Material, THREE.Material>();

    const cloneMaterial = (material: THREE.Material) => {
      const existing = materialClones.get(material);
      if (existing) return existing;

      const cloned = material.clone();
      if (cloned instanceof THREE.MeshStandardMaterial) {
        cloned.metalness = 0.82;
        cloned.roughness = 0.28;
        cloned.envMapIntensity = 1.45;
        cloned.side = THREE.DoubleSide;
        cloned.clipShadows = true;
      }

      materialClones.set(material, cloned);
      return cloned;
    };

    clone.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.material = Array.isArray(child.material)
        ? child.material.map(cloneMaterial)
        : cloneMaterial(child.material);
      child.castShadow = true;
      child.receiveShadow = true;
    });

    return { engine: clone, materials: Array.from(materialClones.values()) };
  }, [scene]);
  const group = useRef<THREE.Group>(null);
  const sectionPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, -1), 0),
    []
  );

  useEffect(() => {
    return () => materials.forEach((material) => material.dispose());
  }, [materials]);

  useEffect(() => {
    materials.forEach((material) => {
      material.clippingPlanes = sectioned ? [sectionPlane] : [];
      material.needsUpdate = true;
    });
  }, [materials, sectionPlane, sectioned]);

  useFrame((_, delta) => {
    if (!group.current) return;

    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.22;
    }
  });

  return (
    <group ref={group} position={[0, 0.3, 0]}>
      <Center>
        <primitive
          object={engine}
          scale={8}
          rotation={[0, 0, -Math.PI / 2]}
        />
      </Center>
    </group>
  );
}

function LuinRenderer() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const [sectioned, setSectioned] = useState(false);
  const [rendererFailed, setRendererFailed] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();

    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", update);
      return () => query.removeEventListener("change", update);
    }

    query.addListener(update);
    return () => query.removeListener(update);
  }, []);

  if (rendererFailed) return <PreviewFallback />;

  return (
    <>
      <div className="absolute right-5 top-5 z-10 flex border border-white/18 bg-black/72 p-1 text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm sm:right-7 sm:top-7 lg:top-24">
        <button
          type="button"
          aria-pressed={!sectioned}
          onClick={() => setSectioned(false)}
          className={`px-3 py-2 transition-colors ${!sectioned ? "bg-white text-black" : "text-white/52 hover:text-white"}`}
        >
          Exterior
        </button>
        <button
          type="button"
          aria-pressed={sectioned}
          onClick={() => setSectioned(true)}
          className={`px-3 py-2 transition-colors ${sectioned ? "bg-white text-black" : "text-white/52 hover:text-white"}`}
        >
          Y–X section
        </button>
      </div>

      <Canvas
        className="pointer-events-none"
        shadows
        camera={{ position: [0, 0.68, 5.05], fov: 31 }}
        dpr={[1, 1.4]}
        fallback={<PreviewFallback />}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.localClippingEnabled = true;
          gl.domElement.addEventListener(
            "webglcontextlost",
            () => setRendererFailed(true),
            { once: true }
          );
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
        <spotLight position={[4, 1.8, 3]} intensity={86} angle={0.44} penumbra={1} color="#b9dcff" />
        <spotLight position={[-3, -0.4, 3]} intensity={54} angle={0.48} penumbra={1} color="#ffd8c8" />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.48}>
            <EngineModel reduceMotion={reduceMotion} sectioned={sectioned} />
          </Bounds>
          <Environment resolution={128}>
            <Lightformer intensity={5} position={[0, 4, 3]} scale={[7, 0.35, 1]} />
            <Lightformer intensity={3} position={[-4, 0, 2]} rotation-y={Math.PI / 2} scale={[5, 0.5, 1]} />
            <Lightformer intensity={4} position={[4, 0, 1]} rotation-y={-Math.PI / 2} scale={[5, 0.3, 1]} />
          </Environment>
        </Suspense>

        <StageFloor />

      </Canvas>
    </>
  );
}

export default function LuinEngine({ className = "" }: { className?: string }) {
  return (
    <div className={`relative bg-transparent ${className}`}>
      <PreviewErrorBoundary>
        <LuinRenderer />
      </PreviewErrorBoundary>
    </div>
  );
}

useGLTF.preload(withBasePath("/luin-engine.glb?v=6"));
