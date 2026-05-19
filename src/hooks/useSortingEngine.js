import { useRef, useState } from "react";

export default function useSortingEngine() {
  const [array, setArray] = useState([]);
  const [frame, setFrame] = useState(null);

  const genRef = useRef(null);
  const running = useRef(false);

  const init = (arr, generatorFn) => {
    genRef.current = generatorFn(arr);
    setArray([...arr]);
    setFrame(null);
  };

  const step = () => {
    const res = genRef.current?.next();
    if (!res || res.done) return;

    setFrame(res.value);
    setArray([...res.value.array]);
  };

  const play = (speed = 50) => {
    running.current = true;

    const loop = () => {
      if (!running.current) return;

      const res = genRef.current?.next();
      if (!res || res.done) return;

      setFrame(res.value);
      setArray([...res.value.array]);

      setTimeout(loop, speed);
    };

    loop();
  };

  const pause = () => {
    running.current = false;
  };

  return { array, frame, init, step, play, pause };
}