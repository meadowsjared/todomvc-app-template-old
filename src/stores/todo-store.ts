import { defineStore } from "pinia";
import type { Todo } from "../domain/Todo";

interface State {
	_sourceTodos: Todo[];
	_displayedTodos: Todo[];
	_filter: string;
}

export const useTodoStore = defineStore("todos", {
	state: (): State => ({
		_sourceTodos: [
			{ checked: true, message: "Do Stuff", id: 0, active: true },
			{ checked: false, message: "Also things", id: 1, active: true },
			{ checked: true, message: "Whatever", id: 2, active: true },
		],
		_displayedTodos: [],
		_filter: "all",
	}),
	getters: {
		todos: (state: State) => {
			switch (state._filter) {
				case "active":
					return state._displayedTodos.filter((todo) => todo.active); // Active
				case "completed":
					return state._displayedTodos.filter((todo) => todo.checked); // completed
				default: // all
					return state._displayedTodos; // All
			}
		},
		tasksLeft: (state: State) =>
			state._displayedTodos.filter((todo) => !todo.checked).length ?? 0,
		filter: (state: State) => state._filter,
	},
	actions: {
		destroyTodo(todo: Todo) {
			todo.active = false;
		},
		clearCompleted() {
			// filter the todo list to only show the unchecked todos
			// this._displayedTodos = this._sourceTodos.filter((todo) => !todo.checked);

			this._displayedTodos
				.filter((todo) => todo.checked)
				.forEach((todo) => {
					todo.active = false;
				});
		},
		loadData() {
			this._displayedTodos = this._sourceTodos;
		},
		setFilter(filter: string) {
			this._filter = filter;
		},
	},
});
