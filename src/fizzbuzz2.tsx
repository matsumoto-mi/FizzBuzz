import React from "react";

export const FizzBuzz2 = () => {
  const array: Array<string | number> = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else {
      array.push(i);
    }
  }
  return <p>{array}</p>;
  // return array.map((word) => {
  //   return <p>{word}</p>;
  // });
};
