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

  let [alret, setalert] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {};
  });

  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade2("end");
    }, 1000);
    return () => {
      setFade2("");
    };
  }, []);
  let [tab, setTab] = useState(0);

  return (
    <div className={"container nomal " + fade2}>
      {alret == true ? (
        <div className={"alert alert-warning"}>2초이내 구매시 할인</div>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <div>
            <Link to={`/detail/${id == 0 ? 1 : 2}`} className="text-d">
              <h4 onClick={() => {}}> 다음 상품 보기 ❤️</h4>
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
    let timer = setTimeout(() => {
      setFade("end");
    }, 1000);
    return () => {
      setFade("");
      clearTimeout(timer);
    };
  }, [tab]);
  return (
    <div className={"nomal " + fade}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );

  // if(tab==0){
  //   return <div>내용0</div>;

  // }
  // elseif(tab==1){
  //   return <div>내용1</div>
  // }
  //   elseif(tab==2){
  //   return <div>내용1</div>
  // }
}

export default Detail;
