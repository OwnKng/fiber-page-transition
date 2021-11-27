import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"

const Lights = () => {
  const ref = useRef()
  const { viewport } = useThree()

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    ref.current.position.set(x, y, -10)
  })

  return (
    <>
      <spotLight
        ref={ref}
        color='#9396C2'
        castShadow
        receiveShadow
        intensity={1.0}
        penumbra={1.2}
      />
      <spotLight
        position={[10, 8, 10]}
        angle={20}
        color='#6da2db'
        castShadow
        receiveShadow
        intensity={0.5}
        penumbra={0.1}
      />
      <spotLight
        position={[-10, 6, 20]}
        angle={20}
        color='#f56a1b'
        castShadow
        receiveShadow
        intensity={0.1}
        penumbra={0.1}
      />
      <spotLight
        position={[0, 20, 0]}
        angle={20}
        color='white'
        castShadow
        receiveShadow
        intensity={0.5}
        penumbra={0.1}
      />
      <hemisphereLight
        position={[0, 10, 10]}
        intensity={0.2}
        castShadow
        color={"white"}
      />
    </>
  )
}

export default Lights
