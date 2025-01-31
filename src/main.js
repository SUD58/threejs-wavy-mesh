import {
  AmbientLight,
  AxesHelper,
  Clock,
  DirectionalLight,
  IcosahedronGeometry,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  WebGLRenderer,
} from "three";
import "./style.css";
import vertexShader from "./shaders/vertex-shader.glsl";
import fragmentShader from "./shaders/fragment-shader.glsl";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import CustomShaderMaterial from "three-custom-shader-material/vanilla";
import GUI from "lil-gui";

// Scene, Camera, Renderer
const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 5;
controls.update();

// Resize Handler
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const geometry = new IcosahedronGeometry(2, 100);
const material = new CustomShaderMaterial({
  baseMaterial: MeshStandardMaterial,
  vertexShader,
  fragmentShader,
  uniforms: {
    uNoiseScale: { value: 1 },
    uTime: { value: 0 },
  },
});

const gui = new GUI();
gui.add(material.uniforms.uNoiseScale, "value", 0, 10);

const sphere = new Mesh(geometry, material);
scene.add(sphere);

const ambientLight = new AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const clock = new Clock();

// Animation Loop
function animate() {
  const elapsedTime = clock.getElapsedTime();

  material.uniforms.uTime.value = elapsedTime / 2;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

const guiDiv = document.querySelector("div");
const paragraph = document.createElement("p");
paragraph.innerHTML = `Project by <a class="underline" target="_blank" href="https://github.com/SUD58">Suhrud Shringarputale</a>`;
paragraph.className = "text-white text-sm text-right m-2!";
guiDiv.appendChild(paragraph);
