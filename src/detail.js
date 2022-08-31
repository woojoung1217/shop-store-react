/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import { Link, Route, useParams, Routes } from "react-router-dom";
import { Nav, Alert, Card } from "react-bootstrap";
import { addItem } from "./store";
import { useDispatch } from "react-redux";

function Detail(props) {
  let { id } = useParams();
  let findPageNum = props.shoes.find(function (ele) {
    return ele.id == id;
  });
  let [tab, setTab] = useState(0);
  useEffect(() => {});
  let dispatch = useDispatch();
  useEffect(() => {
    let 꺼낸거 = localStorage.getItem("watched");
    꺼낸거 = JSON.parse(꺼낸거);
    꺼낸거.push(findPageNum.id);
    꺼낸거 = new Set(꺼낸거);
    꺼낸거 = Array.from(꺼낸거);
    localStorage.setItem("watched", JSON.stringify(꺼낸거));
  }, []);

  let [alret, setalert] = useState(true);
  let [count, setcount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {};
  });

  return (
    <div className="container">
      {alret == true ? (
        <div className={"alert alert-warning"}>2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <div>
            <Link to={`/detail/${id == 0 ? 1 : 2}`} className="text-d">
              <h4 onClick={() => {}}> 다음 상품 보기⏭</h4>
            </Link>
          </div>

          {id == 0 ? (
            <img
              src={"https://codingapple1.github.io/shop/shoes1.jpg"}
              width="100%"
            />
          ) : null}
          {id == 1 ? (
            <img
              src={"https://codingapple1.github.io/shop/shoes2.jpg"}
              width="100%"
            />
          ) : null}
          {id == 2 ? (
            <img
              src={"https://codingapple1.github.io/shop/shoes3.jpg"}
              width="100%"
            />
          ) : null}
          {id == 3 ? (
            <img
              src={"https://codingapple1.github.io/shop/shoes4.jpg"}
              width="100%"
            />
          ) : null}
          {id == 4 ? (
            <img
              src={"https://codingapple1.github.io/shop/shoes5.jpg"}
              width="100%"
            />
          ) : null}
          {id == 5 ? (
            <img
              src={"https://codingapple1.github.io/shop/shoes6.jpg"}
              width="100%"
            />
          ) : null}
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
function itemsContent(props) {}

function TabContent({ tab }) {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 1000);
    return () => {
      setFade("");
    };
  }, [tab]);

  return (
    <div className={"start" + fade}>
      {
        [<div>이건 검은 신발임</div>, <div>120000원임</div>, <div>남자용</div>][
          tab
        ]
      }
    </div>
  );
}

export default Detail;
