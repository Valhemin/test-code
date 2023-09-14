export function miniMaxSum(arr: number[]): void {
  arr.sort((a, b) => a - b);
  const minSum: number = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
  const maxSum: number = arr.slice(1).reduce((acc, num) => acc + num, 0);
  console.log(minSum, maxSum);
}

export function getTotal(arr: number[]): number {
  return arr.reduce((acc, num) => acc + num, 0);
}

export function findMin(arr: number[]): number {
  return Math.min(...arr);
}

export function findMax(arr: number[]): number {
  return Math.max(...arr);
}

export function findEvenElements(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

export function findOddElements(arr: number[]): number[] {
  return arr.filter((num) => num % 2 !== 0);
}
