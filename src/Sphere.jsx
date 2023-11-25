import * as THREE from "three";
import { useEffect, useRef } from "react";
import { shaderMaterial } from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";

import fragmentShader from "./shader/fragment.glsl";
import vertexShader from "./shader/vertex.glsl";

export default function Sphere({
  uAmplifier,
  uFrequency,
  uDisplacement,
  uSpeed,
  radius,
  segments,
  wireframe,
}) {
  console.log({ uAmplifier, uFrequency, uDisplacement, uSpeed, radius, segments, wireframe });
  const shaderMaterialRef = useRef();
  const { size } = useThree();

  useFrame((_, deltaTime) => {
    shaderMaterialRef.current.uTime += deltaTime;
  });

  const NoiseShader = shaderMaterial(
    {
      uTime: 0,
      uResolution: new THREE.Vector2(size.width, size.height),
      uAmplifier: uAmplifier,
      uFrequency: uFrequency,
      uDisplacement: uDisplacement,
      uSpeed: uSpeed,
    },
    vertexShader,
    fragmentShader
  );

  extend({ NoiseShader });

  useEffect(() => {
    console.log(shaderMaterialRef.current);
    shaderMaterialRef.current.uAmplifier = uAmplifier;
    shaderMaterialRef.current.uFrequency = uFrequency;
    shaderMaterialRef.current.uDisplacement = uDisplacement;
    shaderMaterialRef.current.uSpeed = uSpeed;
  }, [uAmplifier, uFrequency, uDisplacement, uSpeed]);

  return (
    <mesh>
      <noiseShader ref={shaderMaterialRef} wireframe={wireframe} />
      <icosahedronGeometry args={[radius, segments]} />
    </mesh>
  );
}
