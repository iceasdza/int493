function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // result1 works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
