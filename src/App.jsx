import { useEffect, useState } from "react";
import useSortingEngine from "./hooks/useSortingEngine";
import { bubbleSort } from "./algorithms/bubbleSort";

import Bars from "./components/Bars";

export default function App() {
  const { array, frame, init, play, pause, step } = useSortingEngine();

  const [speed] = useState(50);

  // generate array
  const generateArray = () => {
    const arr = Array.from({ length: 40 }, () =>
      Math.floor(Math.random() * 250) + 10
    );

    init(arr, bubbleSort);
  };

  // auto start once
  useEffect(() => {
    generateArray();
  }, []);

  return (
    <div className="app">

      <h1 className="title">⚡ Sorting Visualizer</h1>

      <div className="panel">
        <button onClick={generateArray}>Generate</button>
        <button onClick={() => play(speed)}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={step}>Step</button>
      </div>

      <Bars array={array} frame={frame} />

    </div>
  );
}