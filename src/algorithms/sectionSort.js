export function* selectionSort(arr) {
  let a = [...arr];

  for (let i = 0; i < a.length; i++) {
    let min = i;

    for (let j = i + 1; j < a.length; j++) {
      yield {
        array: [...a],
        comparing: [min, j],
        swapping: null,
        sorted: []
      };

      if (a[j] < a[min]) min = j;
    }

    [a[i], a[min]] = [a[min], a[i]];

    yield {
      array: [...a],
      comparing: [],
      swapping: [i, min],
      sorted: []
    };
  }

  yield {
    array: [...a],
    comparing: [],
    swapping: null,
    sorted: a.map((_, i) => i)
  };
}