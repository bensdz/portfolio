/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Earth = ({ mobile, isAutoRotating }) => {
  const earth = useGLTF("./planet/scene.gltf");
  const meshRef = useRef();
  const velocity = useRef(0.5);
  const dampingFactor = 0.92;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (earth) setIsLoaded(true);
  }, [earth]);

  useFrame((_, delta) => {
    if (!meshRef.current || !isLoaded) return;

    if (isAutoRotating) {
      meshRef.current.rotation.y += delta * velocity.current;
    } else {
      if (velocity.current > 0) {
        velocity.current *= dampingFactor;
        meshRef.current.rotation.y += delta * velocity.current;
        if (velocity.current < 0.001) velocity.current = 0;
      }
    }
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={0.6} groundColor="white" />
      <spotLight
        position={[50, 50, 50]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <ambientLight intensity={0.5} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = ({ mobile }) => {
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onStart={() => setIsAutoRotating(false)}
        />
        <Earth mobile={mobile} isAutoRotating={isAutoRotating} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
