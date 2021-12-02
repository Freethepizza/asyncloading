import * as THREE from '../../../vendor/three/build/three.module.js';

function createCamera() {
  const width = window.innerWidth/32;
  const height = window.innerHeight/32;
  const camera = new THREE.OrthographicCamera(-width,width,height, -height, .1, 2000);
  camera.position.set(-2.5,20,40);
  
  return camera;
}

export { createCamera };
