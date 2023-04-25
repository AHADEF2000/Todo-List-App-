import PropTypes from 'prop-types';

function Item({ completed, id, title, toggleTodo, deleteTodo }) {

    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button className="btn btn-danger" onClick={() => deleteTodo(id)}>Delete</button>
        </li>)
}

Item.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};



export default Item