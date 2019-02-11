describe("I would see the homepage", () => {
  it("I would have a navbar", () => {
    const { window } = new JSDOM(`
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
        </div>`);
    expect(Header()).toBe(true);
  });
});
