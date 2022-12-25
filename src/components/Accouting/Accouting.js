import React, { useState } from "react";
import { Form } from "../Form/Form";
import "./Accouting.css";

export function Accouting() {
  const [result, setResult] = useState([]);

  const handleAdd = (obj) => {
    setResult((prevResult) => {
      return [...prevResult, obj];
    });
    result.filter((a) => {
      if (a.date === obj.date) {
        a.distance = Number(a.distance) + Number(obj.distance);
        handleRemove(obj);
      }
      return result
    });
  };

  const handleRemove = (l) => {
    setResult((prevResult) => prevResult.filter((o) => o.id !== l.id));
  };

  const res = (a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  };

  return (
    <div className="container">
      <Form onAdd={handleAdd} />
      <div className="table">
        <div className="result-container">
          <p>Дата (ДД.ММ.ГГ)</p>
          <p>Пройдено км</p>
          <p>Действия</p>
        </div>
        <ul>
          {result.sort(res).map((obj) => (
            <li className="paragraph" key={obj.id}>
              <span>{obj.date}</span>
              <span>{obj.distance}</span>
              <img
                className="delete"
                src="../free-icon-cross-87251.png"
                onClick={() => handleRemove(obj)}
                alt="img"
              ></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
