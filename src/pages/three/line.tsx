import React, { memo, useEffect } from "react";
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  LineBasicMaterial,
  Vector3,
  BufferGeometry,
  Line,
} from "three";

/** @name 画线 */
const DrawLine = (props: any) => {
  useEffect(() => {
    // 创建渲染器
    const renderer = new WebGLRenderer({
      canvas: document.querySelector("#three"),
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // 创建相机
    const camera = new PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    // 创建场景
    const scene = new Scene();

    // 创建材质
    const material = new LineBasicMaterial({ color: 0x0000ff });

    // 创建几何体
    const points = [];
    // points.push(new Vector3(0, 0, 10));
    points.push(new Vector3(-10, 0, 0));
    points.push(new Vector3(0, 10, 0));
    points.push(new Vector3(10, 0, 0));
    const geometry = new BufferGeometry().setFromPoints(points);

    // 组合材质和几何体
    const line = new Line(geometry, material);

    // 将线添加到场景中
    scene.add(line);
    renderer.render(scene, camera);
  }, []);
  return <canvas id="three" />;
};

export default DrawLine;
