describe ("oneAway(str1, str2)", function () {
  it ("returns false when the difference in length of the two strings is greater than 1", function () {
    const str1 = "bake";
    const str2 = "bakers";

    expect(oneAway(str1, str2)).toBeFalsy();
  });

  it ("returns true when the two strings are the same except one string has one extra letter", function () {
    const str1 = "pale";
    const str2 = "ple";

    expect(oneAway(str1, str2)).toBeTruthy();
  });

  it ("returns true when the two strings are the same except one string has one fewer letter", function () {
    const str1 = "pales";
    const str2 = "pale";

    expect(oneAway(str1, str2)).toBeTruthy();
  });

  it ("returns true when the two strings are the same except for one differing letter", function () {
    const str1 = "pale";
    const str2 = "bale";

    expect(oneAway(str1, str2)).toBeTruthy();
  });

  it ("returns false when the two strings are the same except more than one differing letter", function () {
    const str1 = "pale";
    const str2 = "bake";

    expect(oneAway(str1, str2)).toBeFalsy();
  });
});