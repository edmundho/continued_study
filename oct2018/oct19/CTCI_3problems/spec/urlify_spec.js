describe ("urlify(string, length)", function () {
  it ("should return the string with all spaces replaced with %20", function () {
    const string = "Mr John Smith";
    const length = 13;

    expect(urlify(string, length)).toEqual("Mr%20John%20Smith");
  });

  it ("should return the string with all spaces replaced with %20", function () {
    const string = "To learn more about candidates and measures, go to sfelections.org";
    const length = 13;

    expect(urlify(string, length)).toEqual("To%20learn%20more%20about%20candidates%20and%20measures,%20go%20to%20sfelections.org");
  });
});