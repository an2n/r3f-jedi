import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { LevaController } from "./components/LevaController";
import { Scene } from "./components/Scene";

export default function App() {
  return (
    <>
      <LevaController />
      <Canvas
        shadows
        gl={{
          powerPreference: "high-performance",
          antialias: false,
          stencil: false,
        }}
        camera={{ fov: 50, position: [0.5, 0.75, 4] }}
      >
        <OrbitControls
          target={[0, 0.3, 0]}
          maxPolarAngle={1.45}
          maxDistance={155}
          minDistance={2}
          enablePan={false}
        />
        <Scene />
      </Canvas>
    </>
  );
}
