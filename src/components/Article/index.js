import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShopping,
  setShopping,
  deleteShopping,
  putShopping,
} from "../../store/actions/users";

const Article = () => {
  let [value, setValue] = useState("");
  let dispatch = useDispatch();
  const change = (inf) => {
    setValue(inf);
  };
  const sendMessage = (value) => {
    dispatch(setShopping(value));
    setValue("");
  };
  let shoppingList = useSelector((state) => state.users.shopping);
  console.log(shoppingList);

  // useEffect(() => {
  //   dispatch(getShopping());
  // }, []);
  const takeMessage = () => {
    dispatch(getShopping());
  };
  const deleteOrder = (id) => {
    dispatch(deleteShopping(id));
  };
  const changOrder = (id, cloth) => {
    // setValue(cloth);
    dispatch(putShopping(id, cloth));
  };
  let shoppingListElement = shoppingList.map((order) => {
    return (
      <li key={order._id}>
        {order.cloth}
        <button onClick={() => deleteOrder(order._id)}>delete</button>
        <button onClick={() => changOrder(order._id, order._cloth)}>
          change
        </button>
      </li>
    );
  });
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="введите сообщение"
        onChange={(e) => change(e.target.value)}
      />
      <button onClick={() => sendMessage(value)}>Send order</button>
      <button onClick={takeMessage}> Take from Api</button>
      <div className="busket">
        <p>Корзина</p>
        <ul>{shoppingListElement}</ul>
      </div>
    </div>
  );
};

export default Article;
