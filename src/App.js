import React, { useEffect } from "react";
import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
import Login from "./Components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Payment from "./Components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe("pk_live_51KMWgsEmxdr0U0RWDYT90xHVPCxsvqMlIJqOqSi23DLmuPkPPsstPl1v5zZY3TwFCC8K9F7NpvvLT1LzOLQXQfRs00JhVBe1pQ");


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // only runs once when app loads, unless array is altered.

    auth.onAuthStateChanged(authUser => {
      console.log("User: ", authUser);
      if(authUser){
        //loggin in or already logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        //logging out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
  }, []);

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
            <Route path="/payment" element={
              <>
                <Header />
                <Elements stripe={promise} >
                  <Payment />
                </Elements>
                
              </>
            } />
            <Route path="/orders" element={
              <>
                <Header />
                <Orders />
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
