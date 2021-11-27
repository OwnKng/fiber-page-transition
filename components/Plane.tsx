const Plane = () => (
  <mesh receiveShadow rotation={[-Math.PI * 0.5, 0, 0]}>
    <planeGeometry args={[100, 100, 1, 1]} />
    <meshStandardMaterial color='#171720' />
  </mesh>
)

export default Plane
