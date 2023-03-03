import { memo, useEffect } from "react";
import * as THREE from "three";

const InitThree = (props: any) => {
  useEffect(() => {
    // 场景
    const scene = new THREE.Scene();
    // 相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // 渲染器
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    // 渲染正方体
    // 生成几何
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // 贴上材质
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // 网格
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    camera.position.z = 5;
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);
    }
    animate();
  }, []);
  return <div id="three" />;
};

export default memo(InitThree);
