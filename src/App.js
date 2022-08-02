/* eslint-disable */
import "./App.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";
import { useState } from "react";
import Data from "./data.js";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import DetailPage from "./detail";

function App() {
  let [shoes, setshoes] = useState(Data);

  let navigate = useNavigate();

  let [img, setimg] = useState([
    "https://codingapple1.github.io/shop/shoes1.jpg",
    "https://codingapple1.github.io/shop/shoes2.jpg",
    "https://codingapple1.github.io/shop/shoes3.jpg",
  ]);

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
                    return <Card shoes={shoes[i]} img={img[i]} />;
                  })}
                </div>
              </div>
            </>
          }
        ></Route>

        <Route
          path="/detail/:pn"
          element={<DetailPage shoes={shoes} img={img} />}
        />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={props.img} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
