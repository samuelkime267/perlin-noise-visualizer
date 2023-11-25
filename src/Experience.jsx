import { OrbitControls } from "@react-three/drei";
import { useControls, folder } from "leva";
import Sphere from "./Sphere";

const Experience = () => {
  const { radius, segments, uAmplifier, uDisplacement, uFrequency, wireframe, background, uSpeed } =
    useControls("Sphere", {
      Uniforms: folder({
        uAmplifier: {
          value: 5,
          min: 0,
          max: 10,
          step: 0.001,
        },
        uFrequency: {
          value: 10,
          min: 0,
          max: 20,
          step: 0.001,
        },
        uDisplacement: {
          value: 10,
          min: 0,
          max: 20,
          step: 0.001,
        },
        uSpeed: {
          value: 1,
          min: 0,
          max: 10,
          step: 0.001,
        },
      }),
      Sphere: folder({
        radius: {
          value: 3,
          min: 0.1,
          max: 10,
          step: 0.01,
        },
        segments: {
          value: 30,
          min: 1,
          max: 50,
          step: 1,
        },
        wireframe: false,
      }),
      Scene: folder({
        background: "#000",
      }),
    });

  return (
    <>
      <color attach="background" args={[background]} />
      <OrbitControls />

      <Sphere
        uAmplifier={uAmplifier}
        uDisplacement={uDisplacement}
        uFrequency={uFrequency}
        uSpeed={uSpeed}
        radius={radius}
        segments={segments}
        wireframe={wireframe}
      />
    </>
  );
};

export default Experience;
