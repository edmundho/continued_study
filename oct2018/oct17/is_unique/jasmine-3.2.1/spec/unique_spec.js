describe ("uniq(str) using a data structure", () => {

  it ("should return true for a unique string", function () {
    const string = "abcdefghijklmnopqrstuvwxyz";
    expect(uniq(string)).toBeTruthy();
  });

  it ("should return false for a non unique string", function () {
    const string = "abcdeff";
    expect(uniq(string)).toBeFalsy();
  });
});

describe ("uniq2(string) (does not use a data structure)", function () {

  it ("should return true for a unique string", function () {
    const string = "zyxwvutsrqponmlkjihgfedcba";
    expect(uniq2(string)).toBeTruthy();
  });

  it("should return false for a non unique string", function () {
    const string = "fdksfjewiojfnlkvnznoiehtoiy0382751ohfwobgsjkabjl";
    expect(uniq2(string)).toBeFalsy();
  });
});