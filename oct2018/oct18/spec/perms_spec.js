describe("arePerms(str1, str2)", function () {

  it ("returns false for two strings of unequal length", function () {
    const str1 = "spike";
    const str2 = "spikey";

    expect(arePerms(str1, str2)).toBeFalsy();
  });

  it ("returns false for two strings which are not permutations of each other", function () {
    const str1 = "apple";
    const str2 = "mango";

    expect(arePerms(str1, str2)).toBeFalsy();
  });

  it ("returns true for two strings which are permutations of each other", function () {
    const str1 = "resistance";
    const str2 = "ancestries";

    expect(arePerms(str1, str2)).toBeTruthy();
  });
});