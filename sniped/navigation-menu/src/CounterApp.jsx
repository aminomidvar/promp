import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0); // State management

  return (
    <div style={styles.container}>
      <h2>React State Management Example</h2>
      <p style={styles.countDisplay}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={styles.button}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)} style={styles.button}>
        -1
      </button>
      <button onClick={() => setCount(0)} style={styles.resetButton}>
        Reset
      </button>
    </div>
  );
};

// Simple inline styles
const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  countDisplay: { fontSize: "24px", margin: "20px 0" },
  button: { padding: "10px 20px", margin: "5px", fontSize: "16px" },
  resetButton: { padding: "10px 20px", margin: "5px", fontSize: "16px", background: "red", color: "white" }
};

export default CounterApp;