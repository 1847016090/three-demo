import React, { memo, useEffect } from "react";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

/** @name 3D文字 */
const DrawText = (props: any) => {
  useEffect(() => {
    // 创建场景
    const scene = new Scene();
    // 创建相机
    const camera = new PerspectiveCamera(
      75,
      window.innerHeight / window.innerWidth
    );

    //! 创建渲染器
    // 1. 创建
    const renderer = new WebGLRenderer();
    // 2. 设置渲染器宽度
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 3. 将渲染内容添加到节点里面
    document.body.appendChild(renderer.domElement);

    // 创建材质

    // 创建几何体

    // 组合材质和几何体

    // 将组合添加到场景中
  }, []);
  return <canvas id="three" />;
};

export default memo(DrawText);
