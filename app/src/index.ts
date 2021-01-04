import {
  Camera,
  DirectionalLight,
  Light,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Renderer,
  Scene,
  SphereGeometry,
  WebGLRenderer
} from 'three';
import { PerspectiveCameraSingleton } from './core/camera-singleton';
import { SceneSingleton } from './core/scene-singleton';
import './helpers/ratio.helper';
import { PerspectiveCameraRatioHelper } from './helpers/ratio.helper';

const scene: Scene = SceneSingleton.getInstance();
const camera: Camera = PerspectiveCameraSingleton.getInstance();
const renderer: Renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

PerspectiveCameraRatioHelper.startResizeListener(camera as PerspectiveCamera, renderer);

camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const light: Light = new DirectionalLight(0xffffff, 1);
light.position.set(0, 3, 2);
light.lookAt(0, 0, 0);
scene.add(light);

const cubeGeometry = new SphereGeometry(1, 100, 100);
const cubeMaterial = new MeshPhongMaterial({ color: 0xff0000 });
const cube = new Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

function animate() {
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate)
}

animate();

document.body.appendChild(renderer.domElement);


