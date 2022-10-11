import Receipts from "./Data";
import Card from "./components/Card.jsx";
import { useState, useEffect } from "react";
import './App.css';

export default function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <div className="search">
        <h1 className="searchText">Search by name:</h1>
        <input type="text" onChange={e => {
          e.preventDefault();
          setSearch(e.target.value)
        }} />
      </div>

      <div className="card-container">
        {Receipts.map(receipt => (
          // need both to be true to print receipt, (short circuiting)
          receipt.paid && receipt.person.includes(search) && <Card receipt={receipt} />
        ))}

      </div>
    </div>
  );
}


