import { defineStore } from "pinia";
import type Todo from "../domain/Todo";

interface State {
	_todos: Todo[];
}

export const useTodoStore = defineStore("todos", {
	state: (): State => ({
		_todos: [
			{ checked: true, message: "Do Stuff", id: 0 },
			{ checked: false, message: "Also things", id: 1 },
			{ checked: true, message: "Whatever", id: 2 },
		],
	}),
	getters: {
		todos: (state: State) => state._todos,
		tasksLeft: (state: State) =>
			state._todos.filter((todo) => !todo.checked).length ?? 0,
	},
	actions: {
		destroyTodo(index: number) {
			this._todos.splice(index, 1); // remove the todo from the array
		},
		clearCompleted() {
			this._todos = this._todos.filter((todo) => !todo.checked);
		},
	},
});
