const API_URL = 'http://localhost:5000/api/todos';

export const todoApi = {
    async fetchTodos() {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Failed to fetch todos');
        return res.json();
    },

    async addTodo(title) {
        const res = await fetch(API_URL, {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({title}),
        });
        if (!res.ok) throw new Error('Failed to add todo');
        return res.json();
    },

    async updateTodo(id, {title, completed}) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT', headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({title, completed}),
        });
        if (!res.ok) throw new Error('Failed to update todo');
        return res.json();
    },

    async deleteTodo(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!res.ok) throw new Error('Failed to delete todo');
        return res.json();
    },

    async clearCompleted() {
        const todos = await this.fetchTodos();
        const completedTodos = todos.filter((todo) => todo.completed);

        await Promise.all(completedTodos.map((todo) => this.deleteTodo(todo._id)));
        return this.fetchTodos();
    },
};