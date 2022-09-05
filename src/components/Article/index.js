import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getShopping } from "../../store/actions/users";
import { users } from "../../store/reducers/users";

const Article = () => {
  let [value, setValue] = useState("");
  let dispatch = useDispatch();
  const change = (inf) => {
    setValue(inf);
  };
  const sendMessage = (value) => {
    dispatch(users.actions.setMessage(value));

    setValue("");
  };
  const takeMessage = () => {
    dispatch(getShopping());
  };

  let message = useSelector((state) => state.users.message);
  console.log(`from state ${message}`);
  let quotes = useSelector((state) => state.users.users);
  console.log(`from api ${quotes}`);
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="введите сообщение"
        onChange={(e) => change(e.target.value)}
      />
      <button onClick={() => sendMessage(value)}>Send message</button>
      <button onClick={takeMessage}> Take from Api</button>
    </div>
  );
};

export default Article;
