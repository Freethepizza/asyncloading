import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js';

async function loadAssets() {
  const loader = new GLTFLoader();

  const [kitchenData, burgerData] = await Promise.all([
    loader.loadAsync('/assets/models/kitchen.glb'),
    loader.loadAsync('/assets/models/burger.glb'),
  ]);

  const kitchen = setupModel(kitchenData);
  kitchen.scale.set(.1,.1,.1)
 

  const burger = setupModel(burgerData);
  burger.scale.set(2, 2, 2);
  burger.position.set(6.6,-0.35,-1)


  return {
    kitchen,
    burger
  };
}

export { loadAssets };
