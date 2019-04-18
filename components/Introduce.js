import React, { Fragment } from "react";
import { Fetch } from "react-data-fetching";

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "flex-start",
    margin: "7%"
  },
  h1: {}
};

const Introduce = props => (
  <Fragment>
    <Fetch url="http://localhost:1337/introduces">
      {({ data }) => (
        <div className="introduceContainer" style={style.container}>
          <h1>pilou</h1>
          <p>
            You wanna know how I got these scars? My father was... a drinker,
            and a fiend. And one night, he goes off crazier than usual. Mommy
            gets the kitchen knife to defend herself. He doesn't like that, not
            one bit. So, me watching he takes the knife to her, laughing while
            he does it. He turns to me and he says: "Why so serious?". He comes
            at me with the knife "Why so serious?". He sticks the blade in my
            mouth. "Let's put a smile on that face." and... Why so serious?
          </p>
        </div>
      )}
    </Fetch>
  </Fragment>
);

export default Introduce;
