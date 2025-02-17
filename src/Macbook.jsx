import { useGLTF, ScrollControls, useScroll, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Macbook = () => {
// let texture = useTexture('/red.jpg');
let texture = useTexture('/red.jpg');

    let model = useGLTF('/mac.glb');
    //   the below code is used to get all the meshes in the model and group them by name like in this case the name of the mesh is "Screen" and "Body" and then we can use them to animate the model
    let meshes = {};
    model.scene.traverse((child) => {
        meshes[child.name] = child;
    });
    // console.log(meshes);
    // the below code is used to animate the model this will rotate the screen of the macbook to 180 degrees which make it look like that laptop is closed.
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = texture;
    meshes.matte.material.emissive = new THREE.Color(0.7, 0,0 );
    meshes.matte.material.emissiveIntensity = 1;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    // meshes.matte.material.color = new THREE.Color(1, 0, 0);
    // meshes.matte.material.wireframe = true;
   let scroll = useScroll();
   useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - scroll.offset * 90);
   })

    return (
        <>
            <group position={[0, -14, 0]}>
                <primitive object={model.scene} />
            </group>
        </>
    )
}

export default Macbook