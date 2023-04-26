import { Component } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '3d-project';
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  cube = new THREE.Mesh(this.geometry, this.material)
  ngOnInit() {

    //adding grid helper
    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    this.scene.add(gridHelper);

    //adding orbital controls
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
		controls.listenToKeyEvents( window ); // optional
    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)
	  // controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		// controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    // controls.minDistance = 100;
		// controls.maxDistance = 500;
    // controls.maxPolarAngle = Math.PI / 2;

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);
    this.scene.add(this.cube);
    this.camera.position.z = 5;
    this.animate();
  }
  animate = () => {
    requestAnimationFrame(this.animate);
    this.cube.rotation.x += 0.005;
    this.cube.rotation.y += 0.01;
    this.render();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

}
