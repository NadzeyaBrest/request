import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getShopping,
  setShopping,
  deleteShopping,
  putShopping,
} from "../../store/actions/users";

import Article from "./component";

const ArticleContainer = () => {
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

  useEffect(() => {
    dispatch(getShopping());
  }, []);

  const deleteOrder = (id) => {
    dispatch(deleteShopping(id));
    setValue('')
  };
  const changOrder = (id, value) => {
    let order = {
      id: id,
      value: value,
    };
    dispatch(putShopping(order));
    setValue('')
  };

  return (
<Article value ={value}setValue={setValue}  deleteOrder={deleteOrder} changOrder={changOrder} change={change}  sendMessage={sendMessage} shoppingList={shoppingList}/>
  );
};


export const container =ArticleContainer;