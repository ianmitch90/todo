import actions from '../actions/actionTypes';

let initialState = {
	todos: [],
	mounted: false,
}
// essentially here is where i can set an inital state, after witch i can just switch between the appropriate action


export default (state = initialState, action) => {
	switch(action.type){
		case actions.FETCHING_TODOS_COMPLETE :
			return {
				mounted: true,
				todos: action.todos
			};
		case actions.EDIT_TODOS:
			return {
				...state,
				todos: state.map((todo) => {
					if(todo.id === action.id){
						return {
							...todo,
							...action.updates
						}
					}
					return todo;
				})		
			};
		case actions.REMOVE_TODO :
			return {
				...state,
				todos: state.todos.filter(({id}) => id !== action.id)
			}
		default: 
			return state;
	}
}