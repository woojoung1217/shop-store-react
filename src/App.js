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
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
  }, []);
  let [count, setcount] = useState(0);

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
            <Link to="/cart" className="Link-to-detail Link-space">
              <span className="material-icons">shopping_cart</span>
            </Link>
          </Nav>
          <Nav className="ms-auto">반가워요 Kim</Nav>
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
                className={"btn-style"}
                onClick={() => {
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((result) => {
                      let copy = [...shoes].concat([...result.data]);
                      setShoes(copy);
                    });
                  setcount(count + 1);
                  if (count === 1) {
                    console.log(count);
                    axios
                      .get("https://codingapple1.github.io/shop/data3.json")
                      .then((result) => {
                        let copy = [...shoes].concat([...result.data]);
                        console.log(result.data);
                        setShoes(copy);
                      });
                  }
                }}
              >
                더보기 버튼
              </button>
            </>
          }
        ></Route>

        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/cart" element={<Cart></Cart>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <Link
        to={`/detail/${props.i}`}
        style={{ textDecoration: "none", fontWeight: "700", color: "black" }}
      >
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="80%"
        />

        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.price}</p>
        <p>{props.shoes.content}</p>
      </Link>
    </div>
  );
}

export default App;
