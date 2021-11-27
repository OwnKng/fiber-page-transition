import { Canvas, useFrame } from "@react-three/fiber"
import { Color } from "three"
import styled from "styled-components"
import { Suspense, useRef } from "react"
import Office from "./Office"
import Lights from "./Lights"
import Plane from "./Plane"
import { animated } from "@react-spring/three"

type sceneProps = {
  className?: string
  spring: {}
}

const Scene = ({ className, spring }: sceneProps) => {
  const ref = useRef()

  return (
    <div className={className}>
      <Canvas
        onCreated={({ scene }) => (scene.background = new Color("#171720"))}
        camera={{ position: [0, 4, 20] }}
      >
        <Lights />
        <Suspense fallback={null}>
          <animated.group ref={ref} {...spring}>
            <Office />
            <Plane />
          </animated.group>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default styled(Scene)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`
