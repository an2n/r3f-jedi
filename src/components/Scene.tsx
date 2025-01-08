import { CubeCamera, Environment } from "@react-three/drei";
import { Jedi } from "./Jedi";
import { Hall } from "./Hall";
import { Effects } from "./Effects";
import { Lights } from "./Lights";
import { Fog } from "./Fog";
import { Ground } from "./Ground";

export function Scene() {
  return (
    <>
      <CubeCamera>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Jedi />
          </>
        )}
      </CubeCamera>

      <Hall />
      <Ground />

      <Fog />
      <Lights />
      <Effects />
    </>
  );
}
