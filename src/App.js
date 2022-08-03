/* eslint-disable */
import "./App.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import { useEffect, useState } from "react";
import Data from "./data.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DetailPage from "./detail";
import axios from "axios";
import data from "./data.js";

function App() {
  let [shoes, setShoes] = useState(Data);

  let [nums, SetNums] = useState(1);

  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="back">
        <Container>
          <Navbar.Brand href="/"> 👟 Store</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="Link-to-home">
              Home
            </Link>
            <Link to="detail" className="Link-to-detail">
              Detail
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
                더보기
              </button>
            </>
          }
        ></Route>

        <Route path="/detail/:pn" element={<DetailPage shoes={shoes} />} />
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
