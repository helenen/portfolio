import styled from "styled-components";

function Introduce() {
  const h1Body = styled.h1`
    font-size: 4em;
    margin-left: 3em;
    margin: 5 0 0 3em;
  `;

  // const style = {
  //   container: {
  //     display: "flex",
  //     justifyContent: "center",
  //     flexDirection: "column",
  //     alignContent: "flex-start",
  //     margin: "7%"
  //   },
  //   p: {
  //     height: "100px",
  //     weight: "1em",
  //     marginLeft: "8em",
  //     marginRight: "9em"
  //   }
  // };

  return (
    <div>
      <h1Body>Hi,</h1Body>
      <h2>I'm Helen Niassy and it's my portfolio</h2>
    </div>
  );
}

export default Introduce;
