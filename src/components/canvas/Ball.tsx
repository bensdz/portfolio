/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import Loader from "../Loader";

const Ball = ({ imgUrl, mobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={mobile ? 0.15 : 0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow={!mobile} receiveShadow={!mobile} scale={2}>
        <sphereGeometry args={[1, mobile ? 16 : 32, mobile ? 16 : 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.25}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, mobile }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={mobile ? [1, 1] : [1, 2]}
      gl={!mobile ? { preserveDrawingBuffer: true } : undefined}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} mobile={mobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
