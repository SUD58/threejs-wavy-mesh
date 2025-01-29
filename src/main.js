import {
  AmbientLight,
  AxesHelper,
  DirectionalLight,
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

const geometry = new SphereGeometry(2, 32, 32);
const material = new CustomShaderMaterial({
  baseMaterial: MeshStandardMaterial,
  vertexShader,
  fragmentShader,
});

const sphere = new Mesh(geometry, material);
scene.add(sphere);

const ambientLight = new AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const directionalLight = new DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
