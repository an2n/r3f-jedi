import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import { MeshStandardMaterial } from "three";

export function Hall() {
  const { scene, materials } = useGLTF("/assets/hall-transformed.glb");

  const { roughness, metalness } = useControls("Hall", {
    roughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    metalness: { value: 0.5, min: 0, max: 1, step: 0.01 },
  });

  useEffect(() => {
    Object.values(materials).forEach((material) => {
      const mat = material as MeshStandardMaterial;
      mat.roughness = roughness;
      mat.metalness = metalness;
      mat.needsUpdate = true;
    });
  }, [materials, roughness, metalness]);

  return (
    <primitive
      object={scene}
      position={[0, 0.5, 9.1]}
      rotation={[0, -Math.PI / 2, 0]}
    />
  );
}
