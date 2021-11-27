import Header from "./Header"
import Scene from "./Scene"
import Page from "./Page"
import styled from "styled-components"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSpring } from "@react-spring/three"

const animationsMap = {
  index: { rotation: [0, 0, 0], position: [0, 0, 10] },
  tech: {
    rotation: [Math.PI * 0.5, 0, 0],
    position: [0, 4, 0],
  },
  contact: { rotation: [0, Math.PI * 0.25, 0], position: [0, 0, 5] },
}

const Layout = ({ className, children }) => {
  const [animation, setAnimation] = useState(animationsMap["index"])

  const { pathname } = useRouter()

  useEffect(() => {
    const path = pathname.replace("/", "") || "index"

    setAnimation(animationsMap[path])
  }, [pathname])

  const spring = useSpring({ ...animation })

  return (
    <div className={className}>
      <Header />
      <Scene spring={spring} />
      <Page>{children}</Page>
    </div>
  )
}

export default Layout
