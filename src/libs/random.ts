function getRandomNumber(
  min: number,
  max: number,
  excludedNumbers: number[]
): number {
  let num: number;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (excludedNumbers.includes(num));
  return num;
}

function getUniqueRandomNumbers(
  count: number,
  min: number,
  max: number
): number[] {
  const excludedNumbers: number[] = [];
  const uniqueRandomNumbers: number[] = [];

  for (let i = 0; i < count; i++) {
    const randomNumber = getRandomNumber(min, max, excludedNumbers);
    uniqueRandomNumbers.push(randomNumber);
    excludedNumbers.push(randomNumber);
  }

  return uniqueRandomNumbers;
}

export default getUniqueRandomNumbers;
