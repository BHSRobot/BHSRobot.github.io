
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


async function loadBirds() {
  const loader = new GLTFLoader();

  const parrotData = await Promise.all([
    loader.loadAsync('./js/.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = parrotData.scene.children();;
  parrot.position.set(0, 0, 2.5);
  return {
    parrot
  };
}

export { loadBirds };