export function* insertionSort(arr) {
  let a = [...arr];

  for (let i = 1; i < a.length; i++) {
    let key = a[i];
    let j = i - 1;

    while (j >= 0 && a[j] > key) {
      yield {
        array: [...a],
        comparing: [j, j + 1],
        swapping: null,
        sorted: []
      };

      a[j + 1] = a[j];
      j--;

      yield {
        array: [...a],
        comparing: [j, j + 1],
        swapping: [j, j + 1],
        sorted: []
      };
    }

    a[j + 1] = key;
  }

  yield {
    array: [...a],
    comparing: [],
    swapping: null,
    sorted: a.map((_, i) => i)
  };
}