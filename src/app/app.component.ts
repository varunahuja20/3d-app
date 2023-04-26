import { Component } from '@angular/core';
import * as THREE from 'three';

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

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);  
    this.scene.add(this.cube);

    this.camera.position.z = 5;

    this.animate();
    // animate();
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
