import { 
  BoxGeometry,
  Camera,
  DirectionalLight,
  Light,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Renderer,
  Scene,
  WebGLRenderer
} from 'three';
import './helpers/ratio.helper';
import { PerspectiveCameraRatioHelper } from './helpers/ratio.helper';

const scene: Scene = new Scene();
const camera: Camera = new PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 10);
const renderer: Renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

PerspectiveCameraRatioHelper.startResizeListener(camera as PerspectiveCamera, renderer);

camera.position.set(2, 2, 2);
camera.lookAt(0, 0, 0);

const light: Light = new DirectionalLight(0xffffff, 1);
light.position.set(0, 3, 2);
light.lookAt(0, 0, 0);
scene.add(light);

const cubeGeometry = new BoxGeometry(1, 1, 1);
const cubeMaterial = new MeshPhongMaterial({ color: 0xff0000 });
const cube = new Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

function animate() {
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate)
}

animate();

document.body.appendChild(renderer.domElement);


