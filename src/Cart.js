import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, deleltItem } from "./store";

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  let [text, settext] = useState("");
  useEffect(() => {
    setTimeout(() => {}, 1000);
  });

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>주문하기</th>
            <th>취소</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map(function (a, i) {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>안녕</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(i));
                    }}
                  >
                    수량
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(deleltItem(i));
                    }}
                  >
                    삭제
                  </button>
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
