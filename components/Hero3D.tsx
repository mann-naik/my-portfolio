"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment, Lightformer } from "@react-three/drei";
import * as THREE from "three";

function GlassKnot() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Continuous slow rotation
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;

    // Smooth mouse-tracking tilt
    const targetX = (state.pointer.y * Math.PI) / 6;
    const targetY = (state.pointer.x * Math.PI) / 6;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetX, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetY, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <group>
        {/* Subtle glowing blue core inside the glass */}
        <mesh scale={0.45}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="#3b82f6" />
        </mesh>

        {/* Frosted Glass Torus Knot */}
        <mesh ref={meshRef} scale={1.15}>
          <torusKnotGeometry args={[1, 0.34, 160, 32]} />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={1.5}
            chromaticAberration={0.08}
            anisotropy={0.3}
            distortion={0.2}
            distortionScale={0.3}
            temporalDistortion={0.1}
            roughness={0.15}
            ior={1.5}
            color="#e2e8f0"
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[340px] sm:h-[420px] lg:h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-4, -3, 2]} intensity={2} color="#3b82f6" />

        {/* Studio lighting reflections for the glass edges */}
        <Environment resolution={256}>
          <Lightformer
            form="ring"
            intensity={2}
            color="#60a5fa"
            scale={6}
            position={[0, 4, -4]}
          />
          <Lightformer
            form="rect"
            intensity={2.5}
            color="#ffffff"
            scale={[6, 2, 1]}
            position={[5, 2, 3]}
          />
          <Lightformer
            form="rect"
            intensity={1.5}
            color="#2563eb"
            scale={[6, 2, 1]}
            position={[-5, -2, 3]}
          />
        </Environment>

        <GlassKnot />
      </Canvas>
    </div>
  );
}