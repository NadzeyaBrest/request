import React from "react";

import style from './style.module.scss'

const Article = ({value,setValue, deleteOrder, changOrder, change, sendMessage, shoppingList}) => {

  let shoppingListElement = shoppingList.map((order) => {
    return (
      <li key={order._id}  className={style.item} >
        <div className={style.order} onClick = {()=>setValue(order.cloth)}>{order.cloth}</div>
        <button onClick={() => deleteOrder(order._id)}>delete</button>
        <button onClick={() => changOrder(order._id, value)}>
          change
        </button>
      </li>
    );
  });
  return (
    <div className={style.container}>
       <h1 className={style.head}>Корзина покупок</h1>
       <div className={style.input}>     
        <input 
        type="text"
        value={value}
        placeholder="fill it"
        onChange={(e) => change(e.target.value)}
      />
      <button onClick={() => sendMessage(value)}>Send order</button></div>
        <ul className={style.list} >{shoppingListElement}</ul>
      
    </div>
  );
};

export default Article;