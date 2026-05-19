export default function Stats({ frame }) {
  return (
    <div style={{ textAlign: "center", margin: 10 }}>
      Steps: {frame?.stats?.steps || 0} | 
      Comparisons: {frame?.stats?.comparisons || 0} | 
      Swaps: {frame?.stats?.swaps || 0}
    </div>
  );
}