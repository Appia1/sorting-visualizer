export default function Controls({
  algorithm,
  setAlgorithm,
  play,
  pause,
  step,
  reset,
  speed,
  setSpeed,
  size,
  setSize
}) {
  return (
    <div className="panel">

      <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
        <option value="bubble">Bubble Sort</option>
        <option value="insertion">Insertion Sort</option>
        <option value="selection">Selection Sort</option>
        <option value="quick">Quick Sort</option>
      </select>

      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
      <button onClick={step}>Step</button>
      <button onClick={reset}>Reset</button>

      <div>
        Speed
        <input
          type="range"
          min="10"
          max="200"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div>
        Size
        <input
          type="range"
          min="10"
          max="100"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        />
      </div>

    </div>
  );
}