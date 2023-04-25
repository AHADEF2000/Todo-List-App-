import { useState } from "react";
import PropTypes from 'prop-types';


function Form({ onSubmit }) {

    const [newItem, setNewItem] = useState('');

    function handleSumbit(e) {
        e.preventDefault();
        if (newItem === '') return
        onSubmit(newItem)
        setNewItem('')
    }
    return <form onSubmit={handleSumbit} className="new-item-form">

        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>

    </form>

}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default Form;