import React, {useState} from 'react';
import shortid from 'shortid';
import './Accouting.css';
// import PropTypes from 'prop-types';


function Accouting() {
    const [result, setResult] = useState([]);
    const [form, setForm] = useState({});
    const [date, setDate] = useState("");
    const [distance, setDistance] = useState("");

    const editingDate = (e) => {
        const {value} = e.target;
        setDate(value);
    };

    const editingDistance = (e) => {
        const {value} = e.target;
        setDistance(value);
    };
    const handleFormChange = (e) => {
        e.preventDefault();
        
    };

    const handleAdd = (evt) => {
        evt.preventDefault();
        setForm([date, distance]);
        const newObj = {id: shortid.generate(), form};
        setResult((prevResult) => [...prevResult, newObj]);
        // setForm(setDate(''), setDistance(''));
    };

    const handleRemove = (l) => {
        setResult(prevBooks => prevBooks.filter(o => o.id !== l.id))
    };


    return (
        <div className='container'>
        <form className='form-container' onSubmit={handleFormChange}  >
            <div className='info data'>
                <label className='text' htmlFor='data'>Дата (ДД.ММ.ГГ)</label>
                <input
                    type="text"
                    name="name"
                    value={date}
                    onChange={editingDate}
                     />
            </div>
            <div className='info distance' >
                <label className='text' htmlFor='distance'>Пройдено км</label>
                <input
                    type="text"
                    name="name"
                    value={distance}
                    onChange={editingDistance}
                    />
            </div>
            <button className='okey' onClick={handleAdd}>OK</button>
        </form>
        <div className='table'>
            <div className='result-container'>
                <p>Дата (ДД.ММ.ГГ)</p>
                <p>Пройдено км</p>
                <p>Действия</p>
            </div>
            <div className='result-list'>
            {result.map((obj) => (
                <li className="paragraph" key={obj.id}>
                    <span>{date}</span>
                    <span>{distance}</span>
                    <img className="delete" src='../free-icon-cross-87251.png' onClick={() => handleRemove(obj)} alt="img"></img>
                </li>))}
            </div>
        </div>
        </div>
    )
};

export default Accouting;