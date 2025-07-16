import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(null);

  const handleRunTest = async () => {
    setResult('Running...');
    try {
      const res = await fetch('http://localhost:4000/run-test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setResult(data.success ? data.result : `Error: ${data.error}`);
    } catch (err) {
      setResult(`Error: ${err.message}`);
    }
  };

  return (
    <div className="App">
      <h1>Playwright Trigger</h1>
      <button onClick={handleRunTest}>Run Playwright Test</button>
      <p>{result}</p>
    </div>
  );
}

export default App;

