import styled from "styled-components"

type PageProps = {
  className?: string
  children: any
}

const Page = ({ className, children }: PageProps) => (
  <div className={className}>
    <div className='inner'>{children}</div>
  </div>
)

export default styled(Page)/* css */ `
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 0;

  .inner {
    max-width: 720px;
    margin: 0px auto;

    h1 {
      text-transform: uppercase;
      text-align: center;
    }
  }
`
