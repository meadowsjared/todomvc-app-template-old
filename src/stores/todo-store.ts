import { defineStore } from "pinia";
import type { Todo } from "../domain/Todo";
import { SortState } from "../domain/Todo";

interface State {
	_sourceTodos: Todo[];
	_displayedTodos: Todo[];
	_filter: string;
	_sort: SortState;
}

function sortTodos(a: Todo, b: Todo, sortState: SortState) {
	// used "guard clauses" instead of if-else statements
	switch (sortState) {
		case SortState.ASCENDING:
			if (a.checked === b.checked) return 0;
			if (a.checked) return 1;
			return -1;
		case SortState.DESCENDING:
			if (a.checked === b.checked) return 0;
			if (a.checked) return -1;
			return 1;
		case SortState.UNSORTED:
			if (a.id === b.id) return 0;
			if (a.id > b.id) return 1;
			return -1;
	}
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
		_sort: SortState.UNSORTED,
	}),
	getters: {
		todos: (state: State) => {
			const sortDirection = state._sort;
			console.log({ sort: sortDirection });
			// sort it based on the current sort setting
			const sortedTodos = state._displayedTodos;
			sortedTodos.sort((a: Todo, b: Todo) => sortTodos(a, b, sortDirection));

			// filter the results
			switch (state._filter) {
				case "active":
					return sortedTodos.filter((todo) => todo.active); // Active
				case "completed":
					return sortedTodos.filter((todo) => todo.checked); // completed
				default: // all
					return sortedTodos; // All
			}
		},
		tasksLeft: (state: State) =>
			state._displayedTodos.filter((todo) => !todo.checked).length ?? 0,
		filter: (state: State) => state._filter,
		sort: (state: State) => state._sort,
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
		setSort(sortState: SortState) {
			this._sort = sortState;
		},
	},
});
