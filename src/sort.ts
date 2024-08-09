function insertionSort<T>(arr: T[]): T[] {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    let j = i;
    while (j > 0 && sorted[j] < sorted[j - 1]) {
      [sorted[j], sorted[j - 1]] = [sorted[j - 1], sorted[j]];
      j--;
    }
  }
  return sorted;
}

// TEST

const input = [4, 5, 3, 2, 4, 6, 8, 4, 1];
console.log(input);

const output = insertionSort(input);
console.log(output);
