import Link from "next/link"
import styled from "styled-components"

type headerType = {
  className?: string
}

const Header = ({ className }: headerType) => (
  <div className={className}>
    <h1>3D ventures</h1>
    <nav>
      <ul>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default styled(Header)/*css*/ `
  width: 100vw;
  display: flex;
  text-transform: uppercase;
  justify-content: space-between;

  h1 {
    margin: 0px;
    padding: 1rem 0.5rem;
    font-weight: 200;
  }

  ul {
    margin: 0px;
    list-style: none;
    display: flex;
    justify-content: flex-end;

    li {
      padding: 1rem;
    }
  }
`
