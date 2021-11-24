import { animated } from "@react-spring/three"
import { useRef } from "react"

const Box = ({ spring }) => {
  const ref = useRef()

  return (
    <animated.mesh {...spring} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color='teal' />
      <hemisphereLight intensity={0.2} />
      <spotLight intensity={1.0} position={[1, 4, 2]} angle={-90} />
    </animated.mesh>
  )
}

export default Box
