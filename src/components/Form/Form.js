import React, { useState } from "react";
import "./Form.css";
import shortid from "shortid";
import format from "date-fns/format";

export function Form({ onAdd }) {
  const [date, setDate] = useState("");
  const [distance, setDistance] = useState("");
  const [count, setCount] = useState("");

  const editingDate = (e) => {
    const { value } = e.target;
    setCount(value);
    let result = format(new Date(value), "dd.MM.yyyy");
    setDate(result);
  };

  const editingDistance = (e) => {
    const { value } = e.target;
    setDistance(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObject = { date, distance, id: shortid.generate() };
    onAdd(newObject);
    setDate("");
    setCount("");
    setDistance("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="info">
        <label className="text" htmlFor="date">
          Дата (ДД.ММ.ГГ)
        </label>
        <input
          type="date"
          name="name"
          value={count}
          onChange={editingDate}
          required
        />
      </div>
      <div className="info">
        <label className="text" htmlFor="distance">
          Пройдено км
        </label>
        <input
          type="number"
          step='0.1'
          name="name"
          value={distance}
          onChange={editingDistance}
          required
        />
      </div>
      <button className="okey" type="submit">
        OK
      </button>
    </form>
  );
}
