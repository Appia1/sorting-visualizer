export default function Bars({ array, frame }) {
  return (
    <div className="bars">
      {array.map((value, i) => {
        const isCompare = frame?.comparing?.includes(i);
        const isSwap = frame?.swapping?.includes(i);

        return (
          <div
            key={i}
            className={`bar ${isCompare ? "compare" : ""} ${isSwap ? "swap" : ""}`}
            style={{ height: `${value}px` }}
          />
        );
      })}
    </div>
  );
}