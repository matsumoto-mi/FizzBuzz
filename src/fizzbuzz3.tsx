import React from "react";

export const FizzBuzz3 = () => {
  let word: string | number = "";
  for (let i: number = 1; i <= 100; i++) {
    if (i > 1) {
      word += " ";
    }
    if (i % 3 === 0 && i % 5 === 0) {
      word += "FizzBuzz";
    } else if (i % 5 === 0) {
      word += "Buzz";
    } else if (i % 3 === 0) {
      word += "Fizz";
    } else {
      word += i;
    }
  }
  console.log(word);
  // return array.map((word) => {
  //   return <p>{word}</p>;
  // });
};
