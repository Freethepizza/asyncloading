import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader.js';

import { setupModel } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [kitchenData, burgerData, skaterData, rapperData, muppieData, gamerData, chefData] = await Promise.all([
    loader.loadAsync('./assets/models/kitchen.glb'),
    loader.loadAsync('./assets/models/burger.glb'),
    loader.loadAsync('./assets/models/skater.glb'),
    loader.loadAsync('./assets/models/rapper.glb'),
    loader.loadAsync('./assets/models/muppie.glb'),
    loader.loadAsync('./assets/models/gamer.glb'),
    loader.loadAsync('./assets/models/chef.glb'),

  ]);



  const kitchen = setupModel(kitchenData);
  kitchen.position.set(0, 0, 0);

  const burger = setupModel(burgerData);
  burger.position.set(0, 0, 0);

  const skater = setupModel(skaterData);
  skater.position.set(0, 0, 0);

  const rapper = setupModel(rapperData);
  skater.position.set(0,0,0);

  const muppie = setupModel(muppieData);
  muppie.position.set(0,0,0);

  const gamer = setupModel(gamerData);
  gamer.position.set(0,0,0);

  const chef = setupModel(chefData);
  chef.position.set(0,0,0);

  return {
    kitchen,
    burger,
    skater,
    rapper,
    muppie,
    gamer,
    chef
  };
}

export { loadBirds };
