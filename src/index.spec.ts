// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import {diamond} from "./index";

expect.extend(matchers);

// test("That's a test!", () => {
//   expect(1 + 1).toEqual(2);
// });
//
// test("jest-extended is included", () => {
//   expect([1, 0]).toIncludeSameMembers([0, 1]);
// });
let array:string[][]=[[" "," "," ","*"," "," "," "],[" "," ","*","*","*"," "," "],[" ","*","*","*","*","*"," "],["*","*","*","*","*","*","*"],[" ","*","*","*","*","*"," "],[" "," ","*","*","*"," "," "],[" "," "," ","*"," "," "," "]]
test("test pour losange 7", () => {
  expect(diamond(7)).toEqual(array);
});

test("test pour losange pair", () => {
  expect(diamond(4)).toEqual(false);
});