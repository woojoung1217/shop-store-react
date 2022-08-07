/* eslint-disable */
import "./App.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import { createContext, useEffect, useState } from "react";
import Data from "./data.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Detail from "./detail";
import axios from "axios";
import Cart from "./Cart";

function App() {
  let [shoes, setShoes] = useState(Data);
  let [nums, SetNums] = useState(1);
  let [재고] = useState([10, 11, 12]);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="back">
        <Container>
          <Navbar.Brand href="/"> SHOE STORE </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="Link-to-home Link-space">
              <span className="material-icons">home</span>
            </Link>
            <Link to={`detail/${0}`} className="Link-to-detail Link-space">
              <span className="material-icons">search</span>
            </Link>
            <Link to="cart" className="Link-to-detail Link-space">
              <span className="material-icons">shopping_cart</span>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container ">
                <div className="row">
                  {shoes.map(function (a, i) {
                    return <Card shoes={shoes[i]} i={i} key={i} />;
                  })}
                </div>
              </div>

              <button
                className="btn-style"
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let copy = [...shoes].concat([...result.data]);
                      setShoes(copy);
                    });
                  if (nums === 2) {
                    axios
                      .get("https://codingapple1.github.io/shop/data2.json")
                      .then((items) => {
                        let copy2 = [...shoes].concat([...items.data]);
                        setShoes(copy2);
                      });
                  }

                  SetNums(nums + 1);
                  console.log(nums);
                }}
              >
                상품 더보기
              </button>
            </>
          }
        ></Route>

        <Route path="/detail/:pn" element={<Detail shoes={shoes} />} />

        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
