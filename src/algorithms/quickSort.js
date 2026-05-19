function* quickSortHelper(a, low, high) {
  if (low >= high) return;

  let pivot = a[high];
  let i = low;

  for (let j = low; j < high; j++) {
    yield {
      array: [...a],
      comparing: [j, high],
      pivot: high,
      swapping: null,
      sorted: []
    };

    if (a[j] < pivot) {
      [a[i], a[j]] = [a[j], a[i]];

      yield {
        array: [...a],
        comparing: [i, j],
        swapping: [i, j],
        pivot: high,
        sorted: []
      };

      i++;
    }
  }

  [a[i], a[high]] = [a[high], a[i]];

  yield* quickSortHelper(a, low, i - 1);
  yield* quickSortHelper(a, i + 1, high);
}

export function* quickSort(arr) {
  let a = [...arr];
  yield* quickSortHelper(a, 0, a.length - 1);

  yield {
    array: [...a],
    comparing: [],
    swapping: null,
    sorted: a.map((_, i) => i)
  };
}