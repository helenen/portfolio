const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("I would see the homepage", () => {
  it("I would have a navbar", () => {
    const nav = new JSDOM(`
    <navbar>
      <a style={Style}>Home</a>
      <a style={Style}>About</a>
      <a style={Style}>works</a>
    </navbar>
   `);
    expect(nav).toEqual(`
    <navbar>
      <a style={Style}>Home</a>
      <a style={Style}>About</a>
      <a style={Style}>works</a>
     </navbar>
    `);
  });
});
