import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
/**
 * React App component that fetches from /api/hello on load.
 */
function App() {
const [message, setMessage] = useState("");
useEffect(() => {
// Call the backend REST endpoint on page load
fetch('/api/hello')
.then(response => response.json())
.then(data => setMessage(data.message));
}, []);
return (
<div className="container">
<h1 className="mt-5">{message}</h1>
</div>
);
}
// Render the React app into the root div
ReactDOM.render(<App />, document.getElementById('root'));