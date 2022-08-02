/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Detail(props) {
  let { pn } = useParams();
  // pn => router 에서 path 를 정할 때 사용한 객체데이터
  // * useparams => router에서 path 뒤에 지정 값을 사용할 때 url 파라미터를 불러올 수 있음
  //  findpageNum 에서 props를 통해 shoes데이터를 가져와 find콜백 함수를 사용해 파라미터로 ele 를 생성
  //  array.id 에서 찾은 값과 pn 객체 데이터가 같을경우 return 하도록
  //  즉 detail / pn(number ) == (shoes[id]) 면 리턴
  let findPageNum = props.shoes.find(function (ele) {
    return ele.id == pn;
  });
  let [num, setnum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("dont put string");
    }
  }, [num]);
  return (
    <div className="container">
      <input
        onChange={(e) => {
          setnum(e.target.value);
        }}
      ></input>
      <div className="row">
        <div className="col-md-6">
          <img src={props.img[pn]} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{findPageNum.title}</h4>
          <p>{findPageNum.content}</p>
          <p>{findPageNum.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
