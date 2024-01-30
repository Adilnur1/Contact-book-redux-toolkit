import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const todo = useSelector((state) =>
    state.todos1.todos.find((elem) => elem.id === parseInt(id))
  );
  return (
    <section>
      <Link className="books" to="/books">
        <h1>Books /</h1>
      </Link>

      <div className="item-details">
        <img src={todo.img} alt="" />
        <div>
          <h2>{todo.name}</h2>
          <y5>{todo.phone}</y5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            cumque sequi expedita officiis, dolorum quaerat repudiandae libero
            aspernatur voluptas porro doloribus dolorem perspiciatis. Sit animi
            illum numquam quod veritatis assumenda.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
