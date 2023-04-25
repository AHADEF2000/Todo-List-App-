import Item from "./Item";
import PropTypes from 'prop-types';

function List({ todos, toggleTodo, deleteTodo }) {
    return (

        <ul className="list">
            {todos.length === 0 && "No Todos"}

            {todos.map(todo => {
                return (
                    <Item {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
                )

            })}

        </ul>
    );
}
List.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
};


export default List;