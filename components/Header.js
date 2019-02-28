import Link from "next/link";

const Style = {
  nabvar:{
    display:'flex'
  },
  ul:{
    display:'flex',
    width:'100%',
    JustifyContent:'flex-end'
  },
  li:{
    display:'flex',
    width:'70px',
    JustifyContent:'space-between'
  },
  p:{
    width:'50px'
  }
  
};
const Header = () => (
  <div className="nabvar"style={Style.nabvar} >
    <ul style={Style.ul}>
      <li style={Style.li}> 
        <Link href="./index">
         <p>Home</p>
        </Link>
      </li>
      <li style={Style.li}>
        <Link href="./index">
          <p>About</p>
        </Link>
      </li>
      <li style={Style.li}>
        <Link href="./work">
          <p>works</p>
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
