/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Alert, Card } from "react-bootstrap";
import { addItem } from "./store";
import { useDispatch } from "react-redux";

function Detail(props) {
  let { pn } = useParams();
  let findPageNum = props.shoes.find(function (ele) {
    return ele.id == pn;
  });
  let [tab, setTab] = useState(0);

  let dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>

        <div className="col-md-6">
          <h4 className="pt-5">{findPageNum.title}</h4>
          <p>{findPageNum.content}</p>
          <p>{findPageNum.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addItem({
                  id: 1,
                  name: findPageNum.title,
                  count: 1,
                })
              );
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0" className="Nav-h">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            상세목록
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            상품정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            상품규격
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 1000);
    return () => {
      setFade(" ");
    };
  }, [tab]);

  return (
    <div className={"start" + fade}>
      {[<div>0</div>, <div>1</div>, <div>2</div>][tab]}
    </div>
  );
}

export default Detail;
