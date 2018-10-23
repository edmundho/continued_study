describe ("stringCompression(string)", function () {
  it ("returns compressed version of string with repeated characters", function () {
    const string = "aabcccccaaa";

    expect(stringCompression(string)).toEqual("a2b1c5a3");
  });

  it ("returns original string if compressed string is not smaller than original", function () {
    const string = "abcdeabcdef";

    expect(stringCompression(string)).toEqual("abcdeabcdef");
  });
});