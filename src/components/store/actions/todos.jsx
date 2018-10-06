import actions from './actionTypes';

export const fetchTodos = () => ({
	type: actions.FETCHING_TODOS
})

export const addTodo = (todo) => ({
	type: actions.ADD_TODO_START,
	todo
});

export const removeTodo = (id) => ({
	type: actions.REMOVE_TODO_START,
	id
});

export const completeTodo = (id) => ({
	type: actions.COMPLETE_TODO_START,
	id
});

export const editTodo = (id, updates) => ({
	type: actions.EDIT_TODO_START,
	id,
	updates
});
