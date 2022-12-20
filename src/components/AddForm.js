// import React, {useState} from "react";
// import shortid from "shortid";

// export default function AddForm({onAdd}) {
//     const [form, setForm] = useState({
//         date: "",
//         distance: ""
//     });

//     const handleFormChange = (e) => {
//         // e.preventDefault()
//         // const { date, distance} = e.target;
//         // setForm((prevForm) => ({...prevForm, date, distance}));
//         const {date, value, distance} = e.target;
//         setForm((prevForm) => ({...prevForm, [date]: value, [distance]: value}));
//     }
    
//         const handleAdd = (e) => {
//             e.preventDefault();
//             const newO = {id: shortid.generate(), date: form.date, distance: form.distance};
    
//             onAdd(newO);
//             setForm({date: "", distance: ""})
//         }; 
// console.log(form)
//     return (
//         <form onChange={handleFormChange}>
//             <li key={form.id}
//              onChange={handleFormChange} 
//              />
//             <button onClick={handleAdd}>добавить</button>
//         </form>
//     )
// }