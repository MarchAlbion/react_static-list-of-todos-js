// Add the required props
import { TodoInfo } from '../TodoInfo/TodoInfo';

export const TodoList = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => {
        return <TodoInfo todo={todo} key={todo.id} />;
      })}
    </section>
  </>
);
