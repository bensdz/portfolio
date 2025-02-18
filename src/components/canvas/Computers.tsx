/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Loader from "../Loader";
const Computers = ({ mobile, isAutoRotating }) => {
  const computer = useGLTF("./working/scene.gltf");
  const meshRef = useRef();
  const velocity = useRef(0.5);
  const dampingFactor = 0.92;
  const [isLoaded, setIsLoaded] = useState(false);
  const mixerRef = useRef();

  useEffect(() => {
    if (computer) {
      setIsLoaded(true);
      const mixer = new THREE.AnimationMixer(computer.scene);
      const clips = computer.animations;
      if (clips.length) {
        const action = mixer.clipAction(clips[0]);
        action.play();
      }
      mixerRef.current = mixer;
    }
  }, [computer]);

  useFrame((_, delta) => {
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }
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
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <ambientLight intensity={0.5} />
      <primitive
        object={computer.scene}
        scale={mobile ? 0.5 : 0.8}
        position={mobile ? [0, -4, -1.5] : [0, -5.25, -1.5]}
        rotation={[0, 0, 0]} // Remove fixed rotation to allow mesh rotation to work
      />
    </mesh>
  );
};

const ComputerCanvas = ({ mobile }) => {
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 2, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          onStart={() => setIsAutoRotating(false)}
        />
        <Computers mobile={mobile} isAutoRotating={isAutoRotating} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
