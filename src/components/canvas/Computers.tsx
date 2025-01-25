/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = ({ mobile }) => {
  const computer = useGLTF("./gaming_desktop_pc/scene.gltf");
  const meshRef = useRef();
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (computer) {
      setIsLoaded(true);
    }
  }, [computer]);

  useFrame((_, delta) => {
    if (meshRef.current && isLoaded) {
      if (animationProgress < 1) {
        const easedProgress = 1 - Math.pow(1 - animationProgress, 3);

        meshRef.current.rotation.y = easedProgress * (Math.PI / 4);
        meshRef.current.position.y =
          Math.sin(animationProgress * Math.PI) * 0.2;
        const scale = 1 + 0.1 * Math.sin(animationProgress * Math.PI);
        meshRef.current.scale.set(scale, scale, scale);

        setAnimationProgress((prev) => Math.min(prev + delta * 0.8, 1));
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
        scale={mobile ? 0.5 : 0.9}
        position={mobile ? [0, -2.5, -1] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputerCanvas = ({ mobile }) => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers mobile={mobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
