import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { Euler, Vector3 } from "three";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/model-v1.glb");
  const { camera } = useThree();
  console.log(materials);
  const handleClick = (e, name) => {
    e.stopPropagation();
    console.log(camera);
    console.log(name);
    // camera.up.set(0, 0, 0);
    switch (name) {
      case "hair":
        camera.rotation.x = Math.PI / 8;
        camera.position.x = 0.1;
        camera.position.y = 7.5;
        camera.position.z = 10.35237941390564;
        camera.scale.z = 10;
        break;
    
      case "head":
        camera.position.x = 0.1;
        camera.position.y = 6.5;
        camera.position.z = 11;
        camera.scale.z = 8;
        break;
    
      default:
        break;
    }
  }

  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
        onClick={(e) => handleClick(e, "hair")}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
        onClick={(e) => handleClick(e, "skin")}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        onClick={(e) => handleClick(e, "eyes")}
      />
      <skinnedMesh
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        onClick={(e) => handleClick(e, "eyes")}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        onClick={(e) => handleClick(e, "head")}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        onClick={(e) => handleClick(e, "mouth")}
      />
    </group>
  );
}

useGLTF.preload("/model-v1.glb");
