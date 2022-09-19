/* eslint-disable */
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, ChangeName, deleltItem, increase } from "./store";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>상품번호</th>
            <th>상품명</th>
            <th>재고</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cartItem.map(function (items, index) {
            return (
              <tr key={index}>
                <td>{state.cartItem[index].id}</td>
                <td>{state.cartItem[index].name}</td>
                <td>{state.cartItem[index].count}</td>
                <td>
                  <button onClick={() => {}}>😃</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
