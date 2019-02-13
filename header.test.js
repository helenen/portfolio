const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("I would see the homepage", () => {
  it("I would have a navbar", () => {
    const frag = JSDOM.fragment(`
    <a style={Style}>Home</a>
    <a style={Style}>About</a>
    <a style={Style}>works</a>
   `);
    expect(frag).toEqual(
      `<a style={Style}>Home</a>
       <a style={Style}>About</a>
       <a style={Style}>works</a>`
    );
  });
});
