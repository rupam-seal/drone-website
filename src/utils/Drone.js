import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import gsap from 'gsap';

let camera, scene, renderer;

let model;
let propeller1, propeller2, propeller3, propeller4;
let PROPELLER_SPEED = 4000;
let DRONE_SPEED = 10000;

const loader = new GLTFLoader();

export function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );
  camera.position.z = 5;
  camera.rotation.z = 1;

  scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(light);

  const light2 = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(light2);

  loader.load('/models/drone.glb', (gltf) => {
    model = gltf.scene;
    model.scale.set(0.45, 0.45, 0.45);

    propeller1 = model.getObjectByName('Circle');
    propeller2 = model.getObjectByName('Circle001');
    propeller3 = model.getObjectByName('Circle003');
    propeller4 = model.getObjectByName('Circle004');

    gsap.to(camera.position, {
      z: 1,
      duration: 1,
      ease: 'back.out(1.7)',
    });

    gsap.to(camera.rotation, {
      z: 0,
      duration: 1,
    });

    gsap.to(model.rotation, {
      x: 1,
      duration: 1,
      delay: 1,
    });

    gsap.to(model.rotation, {
      y: Math.PI * 1.75,
      duration: 2,
      delay: 1,
    });

    gsap.to(model.scale, {
      x: 0.17,
      y: 0.17,
      z: 0.17,
      duration: 1,
      delay: 1,
    });

    gsap.to(model.position, {
      duration: 1,
      delay: 1,
      x: 0.1,
      y: 0.1,
    });

    scene.add(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  renderer.setClearColor(0x000000, 0);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);

  function animation(time) {
    controls.update();

    const droneHover = document.getElementById('middle-sidebar');
    droneHover.addEventListener('mouseover', (m) => {
      PROPELLER_SPEED = 20;
    });

    droneHover.addEventListener('mouseout', (m) => {
      PROPELLER_SPEED = 10000;
    });
    if (model != undefined) {
      model.rotation.y = time / DRONE_SPEED;
    }

    if (
      propeller1 !== undefined ||
      propeller2 != undefined ||
      propeller3 != undefined ||
      propeller4 != undefined
    ) {
      rotationOfPropeller(time);
    }

    renderer.render(scene, camera);
  }

  animation();

  function rotationOfPropeller(time) {
    propeller1.rotation.y = time / -PROPELLER_SPEED;
    propeller2.rotation.y = time / PROPELLER_SPEED;
    propeller3.rotation.y = time / -PROPELLER_SPEED;
    propeller4.rotation.y = time / PROPELLER_SPEED;
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
