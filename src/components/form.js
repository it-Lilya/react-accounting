import React, {useState} from "react";
import '../components/form.css';
import shortid from "shortid";
import convert from "./convert";

export default function Form({onAdd}) {
    const [date, setDate] = useState('');
    const [distance, setDistance] = useState('');
    const [count, setCount] = useState('');

    const editingDate = (e) => {
        const {value} = e.target;
        setCount(value);
        if(value.length >= 10) {
        let result = convert(count);
        setDate(result);
        }
    };
    
    function converter() {
        let result = convert(date);
        setDate(result);
    }
    const editingDistance = (e) => {
        const {value} = e.target;
        setDistance(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        converter();
        const newObject = {date, distance, id: shortid.generate()};
        onAdd(newObject);
        setDate('');
        setCount('');
        setDistance('');
    };

    return (
        <form onSubmit={handleSubmit} > 
            <div className="info">
            <label className='text' htmlFor='date'>Дата (ДД.ММ.ГГ)</label>
                <input
                    type="date"
                    name="name"
                    value={count}
                    onChange={editingDate}
                    required />
            </div>
            <div className="info">
            <label className='text' htmlFor='distance'>Пройдено км</label>
                <input
                    type="number"
                    name="name"
                    value={distance}
                    onChange={editingDistance}
                    required />
            </div>
            <button className='okey' type="submit">OK</button>
        </form>
    )
} 