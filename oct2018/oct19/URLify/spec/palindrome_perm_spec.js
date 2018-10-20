describe ("palindromePerm(string)", function () {
  it ("should return true for string that is a permutation of a palindrome", function () {
    const input = "Tact Coa";

    expect(palindromePerm(input)).toBeTruthy();
  });

  it ("should return false for string that is not a perm of a palindrome", function () {
    const input = "official ballot";

    expect(palindromePerm(input)).toBeFalsy();
  });
});