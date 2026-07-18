import fs from "node:fs/promises";
import path from "node:path";
import { Mesh, MeshStandardMaterial } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

class NodeFileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then((buffer) => {
      this.result = buffer;
      this.onloadend?.({ target: this });
    });
  }
}

globalThis.FileReader ??= NodeFileReader;

const sourceRoot = path.resolve(process.cwd(), "../rockets");
const outputRoot = path.resolve(process.cwd(), "public/rockets");
const models = [
  ["babdh/babdh.obj", "badhbh.glb"],
  ["mach25/mach25.obj", "macha.glb"],
  ["euroc24/euroc24.obj", "airmedh.glb"],
  ["mach24/mach24.obj", "morrigu.glb"],
  ["sionna/sionna.obj", "sionna.glb"],
];

await fs.mkdir(outputRoot, { recursive: true });

for (const [sourceName, outputName] of models) {
  const sourcePath = path.join(sourceRoot, sourceName);
  const outputPath = path.join(outputRoot, outputName);
  const source = await fs.readFile(sourcePath, "utf8");
  const model = new OBJLoader().parse(source);
  const exportMaterial = new MeshStandardMaterial({
    color: "#8a9096",
    metalness: 0.35,
    roughness: 0.55,
  });

  model.traverse((child) => {
    if (!(child instanceof Mesh)) return;

    const sourceMaterial = Array.isArray(child.material)
      ? child.material[0]
      : child.material;
    child.userData.materialName = sourceMaterial?.name ?? "";
    child.material = exportMaterial;
  });

  const exported = await new GLTFExporter().parseAsync(model, {
    binary: true,
    onlyVisible: true,
  });

  await fs.writeFile(outputPath, Buffer.from(exported));
  exportMaterial.dispose();
  console.log(`${sourceName} -> ${path.relative(process.cwd(), outputPath)}`);
}
