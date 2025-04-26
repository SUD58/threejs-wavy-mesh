# Wavy Mesh with Three.js

An interactive, noise-driven wavy sphere mesh using Three.js and custom GLSL shaders.

---

## Features

- **Icosahedron geometry** with high subdivision for smooth displacement
- **Custom shaders** using `three-custom-shader-material`
- **OrbitControls** for intuitive interaction
- **GUI controls** to tweak noise scale in real time
- **Responsive layout** with automatic resize handling
- **Lighting setup** for soft ambient + directional shading

---

## Technologies Used

- [Three.js](https://threejs.org/)
- [GLSL shaders](https://thebookofshaders.com/)
- [three-custom-shader-material](https://github.com/Fyrestar/three-custom-shader-material)
- [lil-gui](https://github.com/georgealways/lil-gui)

---

## Getting Started

### Install dependencies

```bash
npm install three three-custom-shader-material lil-gui