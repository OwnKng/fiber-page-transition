import Header from "./Header"
import Scene from "./Scene"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSpring } from "@react-spring/three"

const rotate = [0, Math.PI * 0.25, Math.PI * 0.25]
const resetRotation = [0, 0, 0]

const animationsMap = {
  about: { rotation: rotate, scale: 1 },
  contact: { rotation: resetRotation, scale: 5 },
}

const Layout = ({ className, children }) => {
  const [animation, setAnimation] = useState({})

  const { pathname } = useRouter()

  useEffect(() => {
    const path = pathname.replace("/", "")
    setAnimation(animationsMap[path])
  }, [pathname])

  const spring = useSpring({
    ...animation,
  })

  return (
    <div className={className}>
      <Header />
      <div className='wrapper'>
        <Scene spring={spring} />
        <div className='overlay'>{children}</div>
      </div>
    </div>
  )
}

export default styled(Layout)`
  .wrapper {
    position: relative;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`
