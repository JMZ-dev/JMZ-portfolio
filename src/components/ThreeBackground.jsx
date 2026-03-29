import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground({ reduceMotion = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 6);

    const lightA = new THREE.DirectionalLight(0xffffff, 0.8);
    lightA.position.set(4, 4, 4);
    scene.add(lightA);
    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    const orbGeo = new THREE.IcosahedronGeometry(1.3, 2);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.35,
      roughness: 0.55,
      wireframe: true,
      transparent: true,
      opacity: 0.30,
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orb);

    const count = 1300;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 7 * Math.random();
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      positions[i * 3 + 0] = r * Math.sin(p) * Math.cos(t);
      positions[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      positions[i * 3 + 2] = r * Math.cos(p);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.34,
    });
    const points = new THREE.Points(pGeo, pMat);
    scene.add(points);

    let raf = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        orb.rotation.x = t * 0.16;
        orb.rotation.y = t * 0.22;
        points.rotation.y = t * 0.05;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      pGeo.dispose();
      pMat.dispose();
      orbGeo.dispose();
      orbMat.dispose();
      renderer.dispose();
    };
  }, [reduceMotion]);

  return (
    <div className="canvas-wrap" aria-hidden="true">
      <canvas id="three-canvas" ref={canvasRef} />
    </div>
  );
}
