import { useGLTF } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three';
const Macbook = () => {
    let model = useGLTF('src/assets/mac.glb');
    //   the below code is used to get all the meshes in the model and group them by name like in this case the name of the mesh is "Screen" and "Body" and then we can use them to animate the model
    let meshes = {};
    model.scene.traverse((child) => {

        meshes[child.name] = child;

    });
    // console.log(meshes);
    // the below code is used to animate the model this will rotate the screen of the macbook to 180 degrees which make it look like that laptop is closed.
    meshes.screen.rotation.x = Math.PI;

        return(
            <>
                <group position={[0, -10, 0]}>
                    <primitive object={model.scene} />
                </group>
            </>
        )
}

export default Macbook