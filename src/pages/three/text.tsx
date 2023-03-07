import React, { memo, useEffect } from "react";
import {
  DirectionalLight,
  Mesh,
  //   MeshBasicMaterial,
  //   MeshMatcapMaterial,
  //   MeshNormalMaterial,
  //   MeshPhongMaterial,
  //   MeshPhysicalMaterial,
  MeshToonMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// import json from "~/three/examples/fonts/helvetiker_bold.typeface.json";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

/** @name 3D文字 */
const DrawText = (props: any) => {
  useEffect(() => {
    // 创建场景
    const scene = new Scene();
    // 创建相机
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    camera.lookAt(0, 0, 0);
    // camera.rotateY(5);
    // 1. 创建渲染器
    const renderer = new WebGLRenderer({
      canvas: document.querySelector("#three"),
      antialias: true, //抗锯齿
    });
    // 2. 设置渲染器宽度
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 3. 将渲染内容添加到节点里面
    document.body.appendChild(renderer.domElement);
    // 4. 设置背景色
    renderer.setClearColor("rgba(191, 115, 87, 0.95)");
    // 5. 设置背景透明
    renderer.setClearAlpha(0);
    // 创建几何体
    const textLoader = new FontLoader();
    const onLoad = function (font) {
      const geometry = new TextGeometry("你好Rokid", {
        // 字体实例
        font: font,
        // 文本大小
        size: 1.5,
        // 文本厚度
        height: 0.1,
        // 文本曲线上的数量点
        curveSegments: 12,
        // 是否开启斜角
        bevelEnabled: true,
        // 文本上斜角的厚深度
        bevelThickness: 0.1,
        // 斜角与原始文本轮廓之间的延伸距离
        bevelSize: 0.01,
        // 斜角的分段数
        bevelSegments: 5,
      });
      geometry.center();
      //   const material = new MeshBasicMaterial({ color:  });
      //   const material = new MeshNormalMaterial({
      //     // flatShading: true,
      //     transparent: true,
      //     opacity: 0.9,
      //   });
      const material = new MeshToonMaterial({
        color: 0x00ea55,
        // specular: 0xffff00,
        // shininess: 0,
      });

      // 添加方向光
      const light = new DirectionalLight(0x00ea55);
      light.position.set(-5, 10, 5);
      scene.add(light);

      const mesh = new Mesh(geometry, material);
      // 设置mesh的位置
      mesh.rotation.set(0, 0, 0);
      // 组合材质和几何体
      scene.add(mesh);
      // 将组合添加到场景中
      //   renderer.render(scene, camera);
    };
    textLoader.load("./fonts/poster.json", onLoad);

    // 鼠标控件
    var controls = new OrbitControls(camera, renderer.domElement);
    console.log("controls", controls);
    /********************************************************/
    function animate() {
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return <canvas id="three" />;
};

export default memo(DrawText);
