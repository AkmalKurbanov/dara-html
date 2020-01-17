import * as THREE from 'three'

export default class Scene {
  constructor() {
    this.container = document.getElementById('stage')

    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.container,
      alpha: true,
    })

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(window.devicePixelRatio)

    this.initLights()
  }

  initLights() {
    const ambientlight = new THREE.AmbientLight(0xffffff, 2)
    this.scene.add(ambientlight)
  }
}
