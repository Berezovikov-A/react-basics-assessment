// import logo from './logo.svg';
import "./App.css";
import React from "react";


function App() {

  const inputRef = React.useRef(null);

  const reducer = (result, action) => {
    switch (action.type) {
      case 'add': 
        return Number(result) + Number(inputRef.current.value);
      case 'subtract':
        return Number(result) - Number(inputRef.current.value);
      case 'multiply': 
        return Number(result) * Number(inputRef.current.value);
      case 'divide': 
        return Number(result) / Number(inputRef.current.value);
      case 'input': 
        inputRef.current.value = null; 
        return result;
      case 'result': 
        return 0;
      default:
        return result;
    };
  };
  
  const [result, dispath] = React.useReducer(reducer, 0)

  return (
    <>
      <h1>The simplest calculator</h1>
      <h2>Result: {result}</h2>      
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          pattern="[0-9]"
          type="number" 
          ref={inputRef}
          placeholder="Type a number" 
           />
        <button onClick={() => dispath({type: 'add'})}>add</button>
        <button onClick={() => dispath({type: 'subtract'})}>subtract</button>
        <button onClick={() => dispath({type: 'multiply'})}>multiply</button>
        <button onClick={() => dispath({type: 'divide'})}>divide</button>
        <button onClick={() => dispath({type: 'input'})}>reset input</button>
        <button onClick={() => dispath({type: 'result'})}>reset result</button>
      </form>
    </>
  );

};

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;