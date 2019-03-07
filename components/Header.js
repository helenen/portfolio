import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Style = {
  nabvar: {
    display: "flex"
  },
  ul: {
    display: "flex",
    width: "100%",
    JustifyContent: "flex-end"
  },
  li: {
    display: "flex",
    width: "70px",
    JustifyContent: "space-between"
  },
  p: {
    width: "50px"
  }
};
const Header = props => (
  <div className="nabvar" style={Style.nabvar}>
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
