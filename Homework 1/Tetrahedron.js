var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 500 );


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//create a blue LineBasicMaterial

var points= [ // https://en.wikipedia.org/wiki/Tetrahedron#Coordinates_for_a_regular_tetrahedron
  new THREE.Vector3(Math.sqrt(8 / 9), 0, -(1 / 3)),
  new THREE.Vector3(-Math.sqrt(2 / 9), Math.sqrt(2 / 3), -(1 / 3)),
  new THREE.Vector3(-Math.sqrt(2 / 9), -Math.sqrt(2 / 3), -(1 / 3)),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(Math.sqrt(8 / 9), 0, -(1 / 3)),
	new THREE.Vector3(-Math.sqrt(2 / 9), Math.sqrt(2 / 3), -(1 / 3)),
  new THREE.Vector3(0, 0, 1),
  new THREE.Vector3(-Math.sqrt(2 / 9), -Math.sqrt(2 / 3), -(1 / 3)),
  new THREE.Vector3(Math.sqrt(8 / 9), 0, -(1 / 3)),


];

const geometry = new THREE.BufferGeometry().setFromPoints( points );
var material = new THREE.MeshBasicMaterial(  { color: 0xffffff} )

const line = new THREE.Line( geometry, material );

scene.add( line );
camera.position.z=10;
renderer.render(scene, camera);
