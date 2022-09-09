// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getShopping,
//   setShopping,
//   deleteShopping,
//   putShopping,
// } from "../../store/actions/users";
// import style from './style.module.scss'

// const Article = () => {
//   let [value, setValue] = useState("");
//   let dispatch = useDispatch();
//   const change = (inf) => {
//     setValue(inf);
//   };
//   const sendMessage = (value) => {
//     dispatch(setShopping(value));
//     setValue("");
//   };
//   let shoppingList = useSelector((state) => state.users.shopping);

//   useEffect(() => {
//     dispatch(getShopping());
//   }, []);

//   const deleteOrder = (id) => {
//     dispatch(deleteShopping(id));
//     setValue('')
//   };
//   const changOrder = (id, value) => {
//     let order = {
//       id: id,
//       value: value,
//     };
//     dispatch(putShopping(order));
//     setValue('')
//   };
//   let shoppingListElement = shoppingList.map((order) => {
//     return (
//       <li key={order._id}  className={style.item} >
//         <div className={style.order} onClick = {()=>setValue(order.cloth)}>{order.cloth}</div>
//         <button onClick={() => deleteOrder(order._id)}>delete</button>
//         <button onClick={() => changOrder(order._id, value)}>
//           change
//         </button>
//       </li>
//     );
//   });
//   return (
//     <div className={style.container}>
//        <h1 className={style.head}>Корзина покупок</h1>
//        <div className={style.input}>     
//         <input 
//         type="text"
//         value={value}
//         placeholder="fill it"
//         onChange={(e) => change(e.target.value)}
//       />
//       <button onClick={() => sendMessage(value)}>Send order</button></div>
//         <ul className={style.list} >{shoppingListElement}</ul>
      
//     </div>
//   );
// };

// export default Article;
export { container as default } from "./container";