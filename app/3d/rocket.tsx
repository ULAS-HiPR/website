"use client";

import {
  ContactShadows,
  Environment,
  Lightformer,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const FLOOR_Y = -2.18;
const WORLD_UNITS_PER_METRE = 1.6;

function StageFloor() {
  const lightPool = useMemo(() => {
    if (typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext("2d");
    if (!context) return null;

    const gradient = context.createRadialGradient(256, 256, 8, 256, 256, 250);
    gradient.addColorStop(0, "rgba(255, 252, 244, 0.68)");
    gradient.addColorStop(0.34, "rgba(225, 232, 240, 0.36)");
    gradient.addColorStop(0.72, "rgba(150, 162, 177, 0.1)");
    gradient.addColorStop(1, "rgba(90, 100, 115, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }, []);

  useEffect(() => () => lightPool?.dispose(), [lightPool]);

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR_Y, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#202328" metalness={0.08} roughness={0.84} />
      </mesh>

      {lightPool ? (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, FLOOR_Y + 0.012, 0]}>
          <circleGeometry args={[3.5, 96]} />
          <meshBasicMaterial
            map={lightPool}
            transparent
            opacity={0.66}
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ) : null}

      <ContactShadows
        position={[0, FLOOR_Y + 0.025, 0]}
        opacity={0.9}
        scale={5.8}
        blur={2.6}
        far={2.8}
        color="#000000"
      />
    </>
  );
}

function createCarbonWeaveTexture() {
  if (typeof document === "undefined") return null;

  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 128;
  const context = canvas.getContext("2d");
  if (!context) return null;

  context.fillStyle = "#3b4045";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.lineCap = "square";

  for (let offset = -128; offset < 256; offset += 16) {
    context.strokeStyle = "rgba(182, 191, 198, 0.2)";
    context.lineWidth = 7;
    context.beginPath();
    context.moveTo(offset, 0);
    context.lineTo(offset + 128, 128);
    context.stroke();

    context.strokeStyle = "rgba(9, 12, 15, 0.42)";
    context.lineWidth = 4;
    context.beginPath();
    context.moveTo(offset + 8, 0);
    context.lineTo(offset + 136, 128);
    context.stroke();
  }

  for (let offset = -128; offset < 256; offset += 32) {
    context.strokeStyle = "rgba(126, 136, 144, 0.12)";
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(offset, 128);
    context.lineTo(offset + 128, 0);
    context.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(12, 26);
  texture.anisotropy = 8;
  return texture;
}

function buildMaterial(
  color: string,
  metalness: number,
  roughness: number,
  options: {
    map?: THREE.Texture | null;
    bumpMap?: THREE.Texture | null;
    bumpScale?: number;
    clearcoat?: number;
    clearcoatRoughness?: number;
  } = {}
) {
  return new THREE.MeshPhysicalMaterial({
    color,
    metalness,
    roughness,
    map: options.map ?? null,
    bumpMap: options.bumpMap ?? null,
    bumpScale: options.bumpScale ?? 0,
    clearcoat: options.clearcoat ?? 0.16,
    clearcoatRoughness: options.clearcoatRoughness ?? 0.28,
    envMapIntensity: 1.45,
    side: THREE.DoubleSide,
    clipShadows: true,
  });
}

function RocketModel({
  model,
  height,
  active,
  reduceMotion,
  sectioned,
  verticalOffset,
}: {
  model: string;
  height: number;
  active: boolean;
  reduceMotion: boolean;
  sectioned: boolean;
  verticalOffset: number;
}) {
  const { scene } = useGLTF(model);
  const rocket = useMemo(() => scene.clone(true), [scene]);
  const group = useRef<THREE.Group>(null);
  const sectionPlane = useMemo(
    () => new THREE.Plane(new THREE.Vector3(0, 0, -1), 0),
    []
  );
  const carbonWeave = useMemo(() => createCarbonWeaveTexture(), []);
  const materials = useMemo(
    () => ({
      carbon: buildMaterial("#b7bec4", 0.36, 0.42, {
        map: carbonWeave,
        bumpMap: carbonWeave,
        bumpScale: 0.018,
        clearcoat: 0.1,
        clearcoatRoughness: 0.38,
      }),
      fin: buildMaterial("#b7bec4", 0.36, 0.42, {
        map: carbonWeave,
        bumpMap: carbonWeave,
        bumpScale: 0.018,
        clearcoat: 0.1,
        clearcoatRoughness: 0.38,
      }),
      composite: buildMaterial("#425064", 0.46, 0.34, {
        clearcoat: 0.24,
        clearcoatRoughness: 0.3,
      }),
      nose: buildMaterial("#913832", 0.44, 0.33, {
        clearcoat: 0.34,
        clearcoatRoughness: 0.24,
      }),
      recovery: buildMaterial("#396a61", 0.4, 0.38),
      electronics: buildMaterial("#334d68", 0.52, 0.32),
      motor: buildMaterial("#565e63", 0.82, 0.24),
      structure: buildMaterial("#a7afb5", 0.84, 0.22, {
        clearcoat: 0.08,
        clearcoatRoughness: 0.4,
      }),
    }),
    [carbonWeave]
  );

  const presentation = useMemo(() => {
    const bounds = new THREE.Box3().setFromObject(rocket);
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = (height * WORLD_UNITS_PER_METRE) / Math.max(size.z, 0.001);

    return {
      scale,
      position: [
        -center.x * scale,
        FLOOR_Y + 0.14 - bounds.min.z * scale + verticalOffset,
        center.y * scale,
      ] as [number, number, number],
    };
  }, [height, rocket, verticalOffset]);

  useEffect(() => {
    const fallbackMaterials = [
      materials.structure,
      materials.recovery,
      materials.electronics,
    ];

    rocket.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      const fallbackMaterial = Array.isArray(child.material)
        ? child.material[0]
        : child.material;
      const sourceName = `${child.name} ${String(
        child.userData.materialName ?? fallbackMaterial?.name ?? ""
      )}`.toLowerCase();
      const hash = sourceName.split("").reduce(
        (total, character) => total + character.charCodeAt(0),
        0
      );

      if (!child.geometry.attributes.normal) child.geometry.computeVertexNormals();
      child.material = /nose|tip/.test(sourceName)
        ? materials.nose
        : /fin/.test(sourceName)
          ? materials.fin
          : /fibreglass|fiberglass|bluetube/.test(sourceName)
            ? materials.composite
            : /carbon|body|airframe|tube|sleeve|transition|fincan|boat tail/.test(sourceName)
              ? materials.carbon
            : /parachute|shock|spring|recovery|coupler/.test(sourceName)
              ? materials.recovery
              : /payload|cansat|ebay|battery|arduino|gps|altimeter|card|avionics/.test(sourceName)
                ? materials.electronics
                : /motor/.test(sourceName)
                  ? materials.motor
                  : fallbackMaterials[hash % fallbackMaterials.length];
      child.castShadow = true;
      child.receiveShadow = true;
    });

    return () => Object.values(materials).forEach((material) => material.dispose());
  }, [materials, rocket]);

  useEffect(() => () => carbonWeave?.dispose(), [carbonWeave]);

  useEffect(() => {
    Object.entries(materials).forEach(([name, material]) => {
      material.clippingPlanes = sectioned && name !== "fin" ? [sectionPlane] : [];
      material.needsUpdate = true;
    });
  }, [materials, sectionPlane, sectioned]);

  useFrame((_, delta) => {
    if (!group.current || !active) return;

    if (sectioned) {
      group.current.rotation.y = THREE.MathUtils.damp(
        group.current.rotation.y,
        0,
        6,
        delta
      );
    } else if (!reduceMotion) {
      group.current.rotation.y += delta * 0.16;
    }
  });

  return (
    <group ref={group}>
      <primitive
        object={rocket}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={presentation.scale}
        position={presentation.position}
      />
    </group>
  );
}

export default function RocketAnimation({
  model = "/rockets/sionna.glb",
  name = "Sionna",
  height = 1.34,
  verticalOffset = 0,
  controlsTopClass = "lg:top-[164px]",
}: {
  model?: string;
  name?: string;
  height?: number;
  verticalOffset?: number;
  controlsTopClass?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [active, setActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [sectioned, setSectioned] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = host.current;
    if (!element || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "650px 0px", threshold: 0.01 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={host} className="absolute inset-0 overflow-hidden bg-black">
      <div className={`absolute right-5 top-5 z-10 flex border border-white/18 bg-black/72 p-1 text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-sm sm:right-7 sm:top-7 ${controlsTopClass}`}>
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

      {shouldLoad ? (
        <Canvas
          className="pointer-events-none"
          shadows
          frameloop={active && !reduceMotion ? "always" : "demand"}
          camera={{ position: [0, 0.08, 8.05], fov: 32 }}
          dpr={[1, 1.6]}
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
          <ambientLight intensity={0.22} />
          <spotLight
            castShadow
            position={[-3.1, 6.2, 4.2]}
            intensity={205}
            angle={0.38}
            penumbra={0.75}
            shadow-bias={-0.00015}
          />
          <spotLight position={[4, 1.8, 3]} intensity={92} angle={0.46} penumbra={1} color="#b9dcff" />
          <spotLight position={[-3, -0.2, 3]} intensity={58} angle={0.5} penumbra={1} color="#ffd8c8" />

          <Suspense fallback={null}>
            <RocketModel
              model={model}
              height={height}
              active={active}
              reduceMotion={reduceMotion}
              sectioned={sectioned}
              verticalOffset={verticalOffset}
            />
            <Environment resolution={128}>
              <Lightformer intensity={5} position={[0, 4, 3]} scale={[7, 0.35, 1]} />
              <Lightformer intensity={3} position={[-4, 0, 2]} rotation-y={Math.PI / 2} scale={[5, 0.5, 1]} />
              <Lightformer intensity={4} position={[4, 0, 1]} rotation-y={-Math.PI / 2} scale={[5, 0.3, 1]} />
            </Environment>
          </Suspense>

          <StageFloor />
        </Canvas>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(255,255,255,0.055),transparent_34%)]" />
      )}

      <p className="pointer-events-none absolute bottom-7 right-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/38 sm:bottom-10 sm:right-10">
        {name} · {height.toFixed(2)} m
      </p>
    </div>
  );
}
