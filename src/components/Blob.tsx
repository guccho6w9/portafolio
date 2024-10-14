import React, { useMemo, useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils, Mesh, ShaderMaterial } from "three";
import vertexShader from "@/components/vertexShader";
import fragmentShader from "@/components/fragmentShader";

const Blob = () => {
  const mesh = useRef<Mesh>(null);
  const hover = useRef(false);
  const [initialPosition] = useState({ x: -2.1, y: 0 });
  const [scale, setScale] = useState(1.9);
  const [rotationMomentum, setRotationMomentum] = useState(0);
  const lastScrollY = useRef(window.scrollY);

  const maxMomentum = 0.57; // Límite para el momentum máximo
  const momentumDecay = 0.97; // Factor de deceleración

  const uniforms = useMemo(() => ({
    u_time: { value: 0 },
    u_intensity: { value: 0.3 },
  }), []);

  useFrame((state) => {
    const { clock } = state;

    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial;
      material.uniforms.u_time.value = 0.3 * clock.getElapsedTime();
      material.uniforms.u_intensity.value = MathUtils.lerp(
        material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );

      // Limitar la posición en el eje Z para que no se acerque a la cámara
      const minZ = 0; // El mínimo valor permitido en Z
      const maxZ = -2;  // El máximo valor permitido en Z, ajusta esto si es necesario
      const distanceFromCamera = MathUtils.clamp(
        10 - scale, 
        minZ, 
        maxZ
      ); // Ajustar Z basado en la escala

      mesh.current.position.z = distanceFromCamera;

      // Añadir un poco de momentum en la rotación
      setRotationMomentum((prev) => MathUtils.lerp(prev, 0, (1 - momentumDecay)));
      mesh.current.rotation.x += MathUtils.clamp(rotationMomentum, -maxMomentum, maxMomentum);
      
      // Escalar el Blob
      mesh.current.scale.set(scale, scale, scale);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY.current;

      if (mesh.current) {
        mesh.current.position.x = initialPosition.x + scrollY * 0.0011;
        mesh.current.position.y = initialPosition.y - scrollY * 0.0003;

        // Limitar el crecimiento del Blob para evitar que se acerque demasiado a la cámara
        const newScale = Math.max(1.5, 1.9 - scrollY * 0.0002);
        setScale(newScale);

        if (scrollDelta > 0) {
          setRotationMomentum((prev) => MathUtils.clamp(prev + 0.002, -maxMomentum, maxMomentum));
        } else if (scrollDelta < 0) {
          setRotationMomentum((prev) => MathUtils.clamp(prev - 0.002, -maxMomentum, maxMomentum));
        }

        lastScrollY.current = scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialPosition]);

  return (
    <mesh
      ref={mesh}
      scale={scale}
      position={[-2.1, 0, 0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronGeometry args={[2.0, 80]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
