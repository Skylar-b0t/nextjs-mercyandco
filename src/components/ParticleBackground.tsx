'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 200 }: { count?: number }) {
    const mesh = useRef<THREE.Points>(null);
    const mousePosition = useRef({ x: 0, y: 0 });

    // Generate random particle positions
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
            sizes[i] = Math.random() * 2 + 0.5;
        }

        return { positions, sizes };
    }, [count]);

    // Track mouse position
    useMemo(() => {
        if (typeof window !== 'undefined') {
            const handleMouseMove = (e: MouseEvent) => {
                mousePosition.current.x = (e.clientX / window.innerWidth) * 2 - 1;
                mousePosition.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    // Animate particles
    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;

            // Subtle mouse follow
            mesh.current.position.x = THREE.MathUtils.lerp(
                mesh.current.position.x,
                mousePosition.current.x * 0.5,
                0.02
            );
            mesh.current.position.y = THREE.MathUtils.lerp(
                mesh.current.position.y,
                mousePosition.current.y * 0.5,
                0.02
            );
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-size"
                    args={[particles.sizes, 1]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#d4a574"
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function ParticleBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={0.5} />
                <Particles count={300} />
            </Canvas>
        </div>
    );
}
