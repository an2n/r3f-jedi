import { MeshReflectorMaterial } from "@react-three/drei";

export function Ground() {
  return (
    <mesh rotation={[Math.PI / -2, 0, 0]} position={[0, -0.8, 0]}>
      <planeGeometry args={[5, 5]} />
      <MeshReflectorMaterial resolution={1024} mirror={1} />
    </mesh>
  );
}
