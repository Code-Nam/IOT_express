// Importer Three.js
import * as THREE from "three";

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x5f6a7d);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
let material = new THREE.MeshToonMaterial({
    color: 0xffff00,
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);
torusKnot.material.needsUpdate = true;

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.z = 3;
scene.add(directionalLight);

function changeMesh(color) {
    torusKnot.material.color.set(color);
    torusKnot.rotation.x += 0.001;
    torusKnot.rotation.y += 0.001;
    renderer.render(scene, camera, torusKnot);
}

export { changeMesh };
