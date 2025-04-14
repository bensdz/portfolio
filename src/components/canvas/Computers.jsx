/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import Loader from "../Loader";
const Computers = ({ mobile, isAutoRotating }) => {
  const computer = useGLTF("./data_center/scene.gltf");
  /** @type {React.MutableRefObject<THREE.Mesh>} */
  const meshRef = useRef();
  const velocity = useRef(0.1);
  const dampingFactor = 0.92;
  const [isLoaded, setIsLoaded] = useState(false);
  /** @type {React.MutableRefObject<THREE.AnimationMixer | undefined>} */
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
    <mesh ref={meshRef} castShadow={!mobile} receiveShadow={!mobile}>
      <hemisphereLight intensity={mobile ? 0.5 : 1.2} groundColor="white" />
      {!mobile && (
        <>
          <spotLight
            position={[0, 50, 0]}
            angle={0}
            penumbra={1}
            intensity={5}
            castShadow
            shadow-mapSize={1024}
          />
          <pointLight intensity={3} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          <directionalLight position={[0, 10, 5]} intensity={2} />
        </>
      )}
      <ambientLight intensity={mobile ? 0.8 : 1.5} />
      <primitive
        object={computer.scene}
        scale={mobile ? 0.15 : 0.3}
        position={mobile ? [0, -3, -1.5] : [0, -4.25, -1.5]}
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
      shadows={!mobile}
      camera={{ position: [0, 5, 21], fov: 35 }}
      gl={!mobile ? { preserveDrawingBuffer: true } : undefined}
    >
      {!mobile && <fog attach="fog" args={["#464646", 0, 40]} />}
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
