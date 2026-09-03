"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function AnimatedBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const scene = new THREE.Scene();

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    // Ambient for subtle depth
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    // --- Constellation (single animation) ---
    const COUNT = 220;
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 160;
      velocities[i * 3] = (Math.random() - 0.5) * 0.12;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.06;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.12;
    }

    const pointsGeom = new THREE.BufferGeometry();
    pointsGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const pointsMat = new THREE.PointsMaterial({
      size: 1.1,
      color: 0xd6b3ff,
      transparent: true,
      opacity: 0.95,
      depthWrite: false,
    });

    const pointsMesh = new THREE.Points(pointsGeom, pointsMat);

    // Lines between nearby points
    const maxConn = COUNT * 3;
    const connPositions = new Float32Array(maxConn * 3 * 2);
    const linesGeom = new THREE.BufferGeometry();
    linesGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(connPositions, 3),
    );
    const linesMat = new THREE.LineBasicMaterial({
      color: 0xa88aff,
      transparent: true,
      opacity: 0.35,
    });
    linesMat.blending = THREE.AdditiveBlending;
    const lines = new THREE.LineSegments(linesGeom, linesMat);

    const group = new THREE.Group();
    group.add(pointsMesh);
    group.add(lines);
    scene.add(group);

    // Interaction state
    let mouseX = 0;
    let mouseY = 0;
    let extreme = false;

    function onMouseMove(e) {
      const { clientWidth, clientHeight } = container;
      mouseX = e.clientX / (clientWidth || window.innerWidth) - 0.5;
      mouseY = e.clientY / (clientHeight || window.innerHeight) - 0.5;
    }
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    function onKey(e) {
      if (e.key === "i" || e.key === "I") {
        extreme = !extreme;
      }
    }
    window.addEventListener("keydown", onKey, { passive: true });

    // no external UI controls exposed

    const clock = new THREE.Clock();
    let reqId;

    function animate() {
      const t = clock.getElapsedTime();

      const velScale = extreme ? 3.2 : 1.0;
      const pos = pointsGeom.attributes.position.array;

      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        pos[ix] += velocities[ix] * velScale;
        pos[ix + 1] += velocities[ix + 1] * velScale;
        pos[ix + 2] += velocities[ix + 2] * velScale;

        if (pos[ix] > 120 || pos[ix] < -120) velocities[ix] *= -1;
        if (pos[ix + 1] > 80 || pos[ix + 1] < -80) velocities[ix + 1] *= -1;
        if (pos[ix + 2] > 120 || pos[ix + 2] < -120) velocities[ix + 2] *= -1;

        const mx = mouseX * 220 * (extreme ? 1.6 : 1.0);
        const my = -mouseY * 140 * (extreme ? 1.6 : 1.0);
        const dx = pos[ix] - mx;
        const dy = pos[ix + 1] - my;
        const d2 = dx * dx + dy * dy;
        if (d2 < (extreme ? 2500 : 900)) {
          const f = (extreme ? 0.0035 : 0.0015) / (Math.sqrt(d2) + 0.1);
          velocities[ix] += dx * f;
          velocities[ix + 1] += dy * f;
        }
      }

      pointsGeom.attributes.position.needsUpdate = true;

      // rebuild lines
      let lp = 0;
      const lineThreshold = extreme ? 48 : 28;
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3;
        for (let j = i + 1; j < COUNT; j++) {
          const jx = j * 3;
          const dx = pos[ix] - pos[jx];
          const dy = pos[ix + 1] - pos[jx + 1];
          const dz = pos[ix + 2] - pos[jx + 2];
          const d2 = dx * dx + dy * dy + dz * dz;
          if (d2 <= lineThreshold * lineThreshold) {
            if (lp < connPositions.length) {
              connPositions[lp++] = pos[ix];
              connPositions[lp++] = pos[ix + 1];
              connPositions[lp++] = pos[ix + 2];
              connPositions[lp++] = pos[jx];
              connPositions[lp++] = pos[jx + 1];
              connPositions[lp++] = pos[jx + 2];
            }
          }
        }
      }
      for (let k = lp; k < connPositions.length; k++) connPositions[k] = 0;
      linesGeom.attributes.position.needsUpdate = true;

      const pulse =
        1.0 + Math.sin(t * (extreme ? 12 : 4)) * (extreme ? 1.4 : 0.35);
      pointsMat.size = 1.0 * pulse;
      const hue = ((Math.sin(t * (extreme ? 0.9 : 0.4)) + 1) / 2) * 0.7 + 0.1;
      pointsMat.color.setHSL(hue, 0.6, extreme ? 0.7 : 0.65);
      linesMat.opacity = extreme ? 0.7 : 0.35;

      group.rotation.y += extreme ? 0.006 : 0.0015;

      camera.position.x += (mouseX * 10 - camera.position.x) * 0.04;
      camera.position.y += (-mouseY * 10 - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    }

    animate();

    function onResize() {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("keydown", onKey);
      try {
        pointsGeom.dispose();
        pointsMat.dispose();
        linesGeom.dispose();
        linesMat.dispose();
        renderer.dispose();
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      } catch (e) {}
    };
  }, []);

  return (
    <div ref={mountRef} className="fixed inset-0 pointer-events-none z-0" />
  );
}
