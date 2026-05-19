export function* bubbleSort(arr) {
  let a = [...arr];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {

      yield {
        array: [...a],
        comparing: [j, j + 1],
        swapping: null,
        sorted: []
      };

      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];

        yield {
          array: [...a],
          comparing: [j, j + 1],
          swapping: [j, j + 1],
          sorted: []
        };
      }
    }
  }

  yield {
    array: [...a],
    comparing: [],
    swapping: null,
    sorted: a.map((_, i) => i)
  };
}