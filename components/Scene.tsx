import { Canvas } from "@react-three/fiber"
import { Color } from "three"
import styled from "styled-components"
import Box from "./Box"

type sceneProps = {
  className?: string
  spring: {}
}

const Scene = ({ className, spring }: sceneProps) => {
  return (
    <div className={className}>
      <Canvas
        onCreated={({ scene }) => (scene.background = new Color("#171720"))}
      >
        <Box spring={spring} />
      </Canvas>
    </div>
  )
}

export default styled(Scene)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`
