import React, {useState} from "react";
import Form from '../components/form';
import '../components/index.css';

export default function Readme() {
    const [result, setResult] = useState([]);

    const handleAddBook = (obj) => {
        setResult((prevResult) => {
            const newObject = [...prevResult, obj]
            return newObject;
        })
    };

    const handleRemove = (l) => {
        setResult(prevResult => prevResult.filter(o => o.id !== l.id));
    };
//    function sort(obj)  {
//     const resultate = result.sort((a, b) => {
//         a = new Date(a.dateModified);
//         b = new Date(b.dateModified);
//         //console.log(a.date)
//         return a>b ? -1 : a<b ? 1 : 0;
//         });
//         console.log(resultate)
//         setResult(resultate)
//         console.log(result)
//     };

    return (
        <div className="container">
            <Form onAdd={handleAddBook} />
            <div className="table">
                <div className='result-container'>
                    <p>Дата (ДД.ММ.ГГ)</p>
                    <p>Пройдено км</p>
                    <p>Действия</p>
                </div>
                <ul>
                    {result.sort((a, b) => a.date - b.date)
                    .map((obj) => (
                        <li className="paragraph" key={obj.id}>
                        <span>{obj.date}</span>
                        <span>{obj.distance}</span>
                        <img className="delete" src='../free-icon-cross-87251.png' onClick={() => handleRemove(obj)} alt="img"></img>
                         </li>))}
                 </ul>
            </div>
        </div>
    )

}