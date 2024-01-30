import React from "react";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const todos = useSelector((state) => state.todos1.todos);
  //   console.log(todos);
  return (
    <div className="list">
      {todos.map((elem) => (
        <ContactItem {...elem} key={elem.id} />
      ))}
    </div>
  );
};

export default ContactList;
