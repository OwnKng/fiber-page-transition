import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
  nodes: {
    AIT01W2W4_AIT01W2W4_0: THREE.Mesh
  }
  materials: {
    AIT01W2W4: THREE.MeshStandardMaterial
  }
}

const Office = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("/building.glb") as GLTFResult

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.0025, 0.0025, 0.0025]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.AIT01W2W4_AIT01W2W4_0.geometry}
            >
              <meshStandardMaterial color='white' />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("/building.glb")

export default Office
