import './App.css';
import "aframe";
import universe from  "./rendu.glb";
import stars from "./stars.webp"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  const loader = new GLTFLoader();
  loader.load(universe, (d) => {
    const entity = document.getElementById("universe");
    entity.object3D.add(d.scene);
  })
  return (
    <a-scene>
      <a-assets>
        <img id="sky" src={stars} alt="" />
      </a-assets>
      <a-entity id="universe" position="0 0 0" scale="15 15 15"></a-entity>
      <a-sky color="FFFFFF" material="src:#sky" rotation="0 0 0"></a-sky>
    </a-scene>
  );
}

export default App;