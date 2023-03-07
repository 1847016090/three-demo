import React, { memo, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/** @name 加载模型 */
const Model = (props: any) => {
  useEffect(() => {
    // 创建场景
    const scene = new THREE.Scene();
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerHeight / window.innerWidth
    );
    // camera.position.z = 10;
    camera.position.set(0, 10, 0);
    // 创建渲染器
    // 1. 创建
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector("#three"),
      antialias: true, //抗锯齿
    });

    // 2. 设置渲染器宽度
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // 3. 将渲染内容添加到节点里面
    document.body.appendChild(renderer.domElement);
    // 4. 设置背景色
    renderer.setClearColor("#fff");
    // 添加网格
    const gridHelper = new THREE.GridHelper(20, 20);
    scene.add(gridHelper);

    // 创建材质
    const onError = (error) => {
      console.log("error", error);
    };

    const onLoad = (gltf) => {
      console.log("gltf", gltf);
      gltf.scene.position.y = 1;
      scene.add(gltf.scene);
    };

    const onProgress = (xhr) => {
      console.log("xhr", xhr);
    };

    const loader = new GLTFLoader();
    loader.load("./model/dog/scene.gltf", onLoad, onProgress, onError);
    // 创建几何体
    // 组合材质和几何体
    // 鼠标控件
    var controls = new OrbitControls(camera, renderer.domElement);
    console.log("controls", controls);
    /********************************************************/
    function animate() {
      // camera.rotation.z
      //   camera.rotation.z = camera.rotation.z + 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
    // 将组合添加到场景中
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      render();
    };
    onWindowResize();

    function render() {
      renderer.render(scene, camera);
    }
    window.addEventListener("resize", onWindowResize);
  }, []);
  return <canvas id="three" />;
};

export default memo(Model);
