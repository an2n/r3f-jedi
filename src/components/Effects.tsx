import { useLoader } from "@react-three/fiber";
import { EffectComposer, Bloom, LUT } from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction, LUTCubeLoader } from "postprocessing";
import { Texture } from "three";

export function Effects() {
  const texture = useLoader(
    LUTCubeLoader,
    "/assets/F-6800-STD.cube"
  ) as unknown as Texture;

  const { intensity, luminanceThreshold, luminanceSmoothing } = useControls(
    "Bloom",
    {
      intensity: { value: 1.1, min: 0, max: 5 },
      luminanceThreshold: { value: 1.45, min: 0, max: 5 },
      luminanceSmoothing: { value: 1, min: 0, max: 1 },
    }
  );

  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        blendFunction={BlendFunction.ADD}
        intensity={intensity}
        luminanceThreshold={luminanceThreshold}
        luminanceSmoothing={luminanceSmoothing}
      />
      <LUT lut={texture} />
    </EffectComposer>
  );
}
