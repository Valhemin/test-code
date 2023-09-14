export function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);
  const minSum = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
  const maxSum = arr.slice(1).reduce((acc, num) => acc + num, 0);
  console.log(minSum, maxSum);
}

export function getTotal(arr: number[]): void {
  const result = arr.reduce((acc, num) => acc + num, 0);
  console.log("Total= ", result);
}

export function findMin(arr: number[]): void {
  const result = Math.min(...arr);
  console.log("Min= ", result);
}

export function findMax(arr: number[]): void {
  const result = Math.max(...arr);
  console.log("Max= ", result);
}

export function findEvenElements(arr: number[]): void {
  const result = arr.filter((num) => num % 2 === 0);
  console.log("Even= ", result);
}

export function findOddElements(arr: number[]): void {
  const result = arr.filter((num) => num % 2 !== 0);
  console.log("Odd= ", result);
}
