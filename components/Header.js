import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Style = {
  nabvar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ul: {
    display: "flex",
    width: "20%",
    justifyContent: "flex-end"
  },
  li: {
    display: "flex",
    width: "70px",
    justifyContent: "space-between"
  },
  p: {
    width: "50px"
  },
  logo: {
    marginLeft: "5%"
  }
};
const Header = props => (
  <div className="nabvar" style={Style.nabvar}>
    <div style={Style.logo}>Logo</div>
    <ul style={Style.ul}>
      <li style={Style.li}>
        <Link href="./index">
          <p>{props.home}</p>
        </Link>
      </li>
      <li style={Style.li}>
        <Link href="./about">
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

Header.propTypes = {
  home: PropTypes.string
};
Header.defaultProps = {
  home: "Home"
};

export default Header;
