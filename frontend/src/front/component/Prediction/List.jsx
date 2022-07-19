import React from "react";
import { Route, NavLink, Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import Content from "./Content";

function App({
  keys,
  onHandleCheckbox,
  onHandleSubmit,
  predictionHandle,
  prediction,
  posts,
}) {
  function generateId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid Appp">
        <ul className="categories my-2">

          <div className='p-2 lang'>
            <Link id="lang1" className="btn btn-danger active" aria-current="page" to="/Robot-Care/prediction">En</Link>
            <Link id="lang2" className="btn btn-success  active" to="/Robot-Care/prediction">العربيه</Link>

          </div>
          <div className="bdy">
            <h2>Body Parts</h2>
          </div>
          {Object.keys(keys).map((el) => (
            <li key={generateId()}>

              <NavLink className="cat" to={"/Robot-Care/Prediction/" + el}>
                <button className="catbtn"> {el}</button>
              </NavLink>

            </li>
          ))}
        </ul>
      </div>
      <Route
        path="/Robot-Care/Prediction/:key"
        render={(props) => (
          <Content
            keys={keys}
            onHandleCheckbox={onHandleCheckbox}
            onHandleSubmit={onHandleSubmit}
            predictionHandle={predictionHandle}
            prediction={prediction}
            posts={posts}
            {...props}
          />
        )}
      />
      <Footer />
    </>
  );
}

export default App;
