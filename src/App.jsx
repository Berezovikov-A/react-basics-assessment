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
      case 'inputReset': 
        inputRef.current.value = null; 
        return result;
      case 'resultReset': 
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
      <form className="calculator" onSubmit={(e) => e.preventDefault()}>
        <input className="input"
          pattern="[0-9]"
          type="number" 
          ref={inputRef}
          placeholder="Type a number" 
           />
        <button className="button" onClick={() => dispath({type: 'add'})}>add</button>
        <button className="button" onClick={() => dispath({type: 'subtract'})}>subtract</button>
        <button className="button" onClick={() => dispath({type: 'multiply'})}>multiply</button>
        <button className="button" onClick={() => dispath({type: 'divide'})}>divide</button>
        <button className="button reset" onClick={() => dispath({type: 'inputReset'})}>reset input</button>
        <button className="button reset" onClick={() => dispath({type: 'resultReset'})}>reset result</button>
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