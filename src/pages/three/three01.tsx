import React, { memo, useEffect } from "react";
import * as THREE from "three";

// 创建第一个场景
const BoxScene = (props: any) => {
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
    // 设置相机在Z轴上面的位置
    camera.position.set(0, 0, 10);
    // 将相机添加到场景里面
    scene.add(camera);

    // 生成几何体
    const cubeBox = new THREE.BoxGeometry(1, 1, 1);
    // 生成材质
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    // 将几何体和材质组合起来生成物体
    const mesh = new THREE.Mesh(cubeBox, cubeMaterial);
    // 将物体放到场景里面
    scene.add(mesh);

    // 生成渲染器
    const renderer = new THREE.WebGLRenderer();
    // 设置渲染器的尺寸
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 将渲染器的canvas放到我们的浏览器节点里面
    document.body.appendChild(renderer.domElement);

    // 最后将场景和相机放到渲染器里面
    renderer.render(scene, camera);
  }, []);
  return <div>BoxScene</div>;
};

export default memo(BoxScene);
