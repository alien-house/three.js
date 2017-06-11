var init = function() {
	// レンダラーを作成
	var renderer = new THREE.WebGLRenderer();
	// レンダラーのサイズを設定
	renderer.setSize(800, 600);
	// canvasをbodyに追加
	document.body.appendChild(renderer.domElement);

	// シーンを作成
	var scene = new THREE.Scene();

	// カメラを作成
	var camera = new THREE.PerspectiveCamera(45, 800 / 600, 1, 1000);

	// 箱を作成
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshPhongMaterial({ color: 0x0000ff });
	var box = new THREE.Mesh(geometry, material);
	box.position.z = -5;
	scene.add(box);

	// 平行光源を生成
	var light = new THREE.DirectionalLight(0xffffff);
	light.position.set(1, 1, 1);
	scene.add(light);

	// 描画
	renderer.render(scene, camera);

}
window.addEventListener('DOMContentLoaded', init);