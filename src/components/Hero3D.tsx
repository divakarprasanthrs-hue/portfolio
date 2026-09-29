import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

// Energy Speedline Particles
function SuperheroSpeedlineParticles() {
  const pointsRef = useRef<THREE.Points>(null!);
  
  const count = 1600;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.04;
      pointsRef.current.rotation.z += delta * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.045}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.75}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// Superhero Anime Core Object
function SuperheroAnimeCore({ mouse }: { mouse: React.RefObject<{ x: number; y: number }> }) {
  const coreMeshRef = useRef<THREE.Mesh>(null!);
  const outerCrystalRef = useRef<THREE.Mesh>(null!);
  const ring1Ref = useRef<THREE.Group>(null!);
  const ring2Ref = useRef<THREE.Group>(null!);
  const ring3Ref = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    const mouseX = mouse.current?.x || 0;
    const mouseY = mouse.current?.y || 0;

    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y += delta * 0.5;
      coreMeshRef.current.rotation.x += delta * 0.3;

      const targetX = mouseY * 0.6;
      const targetY = mouseX * 0.6;

      coreMeshRef.current.rotation.x = THREE.MathUtils.lerp(
        coreMeshRef.current.rotation.x,
        coreMeshRef.current.rotation.x + targetX * 0.03,
        0.08
      );
      coreMeshRef.current.rotation.y = THREE.MathUtils.lerp(
        coreMeshRef.current.rotation.y,
        coreMeshRef.current.rotation.y + targetY * 0.03,
        0.08
      );
    }

    if (outerCrystalRef.current) {
      outerCrystalRef.current.rotation.y -= delta * 0.4;
      outerCrystalRef.current.rotation.z += delta * 0.2;
    }

    if (ring1Ref.current) ring1Ref.current.rotation.z += delta * 0.3;
    if (ring2Ref.current) ring2Ref.current.rotation.x += delta * 0.25;
    if (ring3Ref.current) ring3Ref.current.rotation.y += delta * 0.35;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
      <group scale={[1.4, 1.4, 1.4]}>
        {/* Core Glowing Energy Orb (Icosahedron / Crystal) */}
        <mesh ref={coreMeshRef}>
          <octahedronGeometry args={[1, 2]} />
          <meshPhysicalMaterial
            color="#06b6d4"
            roughness={0.1}
            metalness={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#0891b2"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>

        {/* Outer Plasma Shell */}
        <mesh ref={outerCrystalRef} scale={[1.25, 1.25, 1.25]}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color="#ec4899"
            roughness={0.2}
            metalness={0.8}
            transmission={0.5}
            thickness={0.6}
            emissive="#be185d"
            emissiveIntensity={0.6}
            wireframe
          />
        </mesh>

        {/* Orbiting Energy Ring 1 (Cyan Neon) */}
        <group ref={ring1Ref}>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[1.85, 0.02, 16, 100]} />
            <meshStandardMaterial color="#a5f3fc" metalness={1} roughness={0.1} emissive="#06b6d4" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* Orbiting Energy Ring 2 (Magenta Anime Plasma) */}
        <group ref={ring2Ref}>
          <mesh rotation={[-Math.PI / 3, Math.PI / 4, 0]}>
            <torusGeometry args={[2.15, 0.018, 16, 100]} />
            <meshStandardMaterial color="#f472b6" metalness={1} roughness={0.1} emissive="#ec4899" emissiveIntensity={0.8} />
          </mesh>
        </group>

        {/* Orbiting Energy Ring 3 (Superhero Gold) */}
        <group ref={ring3Ref}>
          <mesh rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
            <torusGeometry args={[2.45, 0.015, 16, 100]} />
            <meshStandardMaterial color="#fef08a" metalness={1} roughness={0.1} emissive="#eab308" emissiveIntensity={0.8} />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

interface Hero3DProps {
  mousePos: React.RefObject<{ x: number; y: number }>;
}

export const Hero3D: React.FC<Hero3DProps> = ({ mousePos }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-90">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 6, 6]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-6, -6, -6]} intensity={2} color="#06b6d4" />
        <pointLight position={[6, -3, 6]} intensity={2} color="#ec4899" />
        <pointLight position={[0, 5, 0]} intensity={1.5} color="#eab308" />

        {/* 3D Superhero Anime Objects */}
        <SuperheroAnimeCore mouse={mousePos} />
        <SuperheroSpeedlineParticles />
      </Canvas>
    </div>
  );
};
