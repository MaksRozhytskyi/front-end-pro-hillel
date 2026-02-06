import { Provider } from 'react-redux'
import { store } from '../ToDoApp/src/store/store.js'
import TodoApp from '../ToDoApp/src/App.jsx'
import '../ToDoApp/src/index.css'

export default function TodoPage() {
  return (
    <Provider store={store}>
      <div className="todo-shell">
        <TodoApp />
      </div>
    </Provider>
  )
}
