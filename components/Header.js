import Link from 'next/link'

const Style = {
    a:{ 
        textDecoration: 'none'
    } 
}
const Header = () => (
    <div>
      <Link href="./index">
        <a style={Style}>Home</a>
      </Link>
      <Link href="/about">
        <a style={Style}>About</a>
      </Link>
      <Link  href="./work">
        <a style={Style}>works</a>
      </Link>
    </div>
  )
  
  export default Header