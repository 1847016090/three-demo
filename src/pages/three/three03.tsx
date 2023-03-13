import React, { memo, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// 3. 添加坐标轴辅助器
const OrbitControlsBox = (props: any) => {
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

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 生成轨道生成器
    const control = new OrbitControls(camera, renderer.domElement);
    console.log("control", control);
    function render() {
      renderer.render(scene, camera);
      // 下一帧执行的时候再次执行render
      requestAnimationFrame(render);
    }

    render();
  }, []);
  return <div>BoxScene</div>;
};

export default memo(OrbitControlsBox);
