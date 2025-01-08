import { useControls } from "leva";

export function Lights() {
  const { intensity, decay, color } = useControls("Light", {
    intensity: { value: 0.5, min: 0, max: 10, step: 0.1 },
    decay: { value: 0, min: 0, max: 2, step: 0.1 },
    color: "#ffffff",
  });

  return (
    <pointLight
      position={[-10, -10, -10]}
      intensity={intensity}
      decay={decay}
      color={color}
    />
  );
}
