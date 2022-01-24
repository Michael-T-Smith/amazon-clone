import React from "react";
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={
              <>
                <Login />
              </>
            } />
          <Route path="/checkout" element={
              <>
                <Header />
                <Checkout />
              </>
            } />
          <Route path="/" element={
              <>
                <Header />
                <Home />
              </>
            } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
