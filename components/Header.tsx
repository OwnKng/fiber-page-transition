import Link from "next/link"
import styled from "styled-components"

type headerType = {
  className?: string
}

const Header = ({ className }: headerType) => (
  <div className={className}>
    <h1>
      <Link href='/'>evergreen terrace</Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link href='/tech'>
            <a>tech</a>
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
  position: fixed;
  z-index: 1;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);

  h1 {
    margin: 0px;
    padding: 1rem 0.5rem;
    font-size: 1.5rem;
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
