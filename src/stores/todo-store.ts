import { onValue, set, ref, remove } from "firebase/database";
import { defineStore } from "pinia";
import { db, todosRef } from "../domain/firebase";
import { SortState } from "../domain/Todo";
import type { Todo } from "../domain/Todo";

interface State {
	_sourceTodos: Todo[];
	_displayedTodos: Todo[] | null;
	_filter: string;
	_sort: SortState;
	maxId: number;
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
			{ checked: true, message: "adding todos!", id: 0, active: true },
			{
				checked: false,
				message: "add saving and persisting data",
				id: 1,
				active: true,
			},
			{
				checked: true,
				message: "do fancy chevron-ing (CSS)",
				id: 2,
				active: true,
			},
			{
				checked: true,
				message: "fix funky active junk",
				id: 3,
				active: true,
			},
			{
				checked: true,
				message: "figure out sorting",
				id: 4,
				active: true,
			},
			{
				checked: true,
				message: "sorting from chevron button",
				id: 5,
				active: true,
			},
		],
		_displayedTodos: [],
		_filter: "all",
		_sort: SortState.UNSORTED,
		maxId: 0,
	}),
	getters: {
		todos: (state: State) => {
			if (!state._displayedTodos) return;
			// sort it based on the current sort setting
			const sortedTodos = state._displayedTodos;
			sortedTodos.sort((a: Todo, b: Todo) => sortTodos(a, b, state._sort));
			state.maxId === 0 && (state.maxId = sortedTodos.length);
			// filter the results
			switch (state._filter) {
				case "unchecked": // unchecked todos
					return sortedTodos.filter((todo) => !todo.checked); // Active
				case "checked": // checked todos
					return sortedTodos.filter((todo) => todo.checked); // completed
				default: // all
					return sortedTodos; // All
			}
		},
		tasksLeft: (state: State) =>
			state._displayedTodos?.filter((todo) => !todo.checked).length ?? 0,
		filter: (state: State) => state._filter,
	},
	actions: {
		destroyTodo(todo: Todo) {
			console.log("destroying todo", todo);
			const todoRef = ref(db, "todos/" + todo.id);
			remove(todoRef)
				.then(() => {
					console.log(`Todo ${todo.id} saved successfully!`);
				})
				.catch((error) => {
					console.warn(`Todo ${todo.id} could not be saved.`, error);
				});
			todo.active = false;
		},
		clearCompleted() {
			// filter the todo list to only show the unchecked todos
			// this._displayedTodos = this._sourceTodos.filter((todo) => !todo.checked);
			if (this._displayedTodos) {
				for (const todo of this._displayedTodos.filter(
					(todo) => todo.checked
				)) {
					todo.active = false;
				}
				this.saveAllTodos();
			}
		},
		loadData() {
			// set up the firebase listener
			onValue(todosRef, (snapshot) => {
				const data = snapshot.val() as Todo[];
				this._displayedTodos = data.filter((value) => value !== undefined);
				console.log("this._displayedTodos", this._displayedTodos);
			});
		},
		setFilter(filter: string) {
			this._filter = filter;
		},
		setSort(sortState: SortState) {
			this._sort = sortState;
		},
		updateTodo(newTodo: Todo) {
			if (!this._displayedTodos) return;
			const index = this._displayedTodos.findIndex(
				(pTodo) => newTodo.id === pTodo.id
			);
			this._displayedTodos[index] = newTodo;
			this.saveTodo(newTodo);
			// update persisted data
		},
		addTodo(newTodo: string) {
			const todo = {
				checked: false,
				message: newTodo,
				active: true,
				id: this.maxId++,
			};
			this._displayedTodos?.push(todo);
			this.saveTodo(todo);
			console.log("adding todo from Pinia", newTodo);
		},
		saveAllTodos() {
			set(todosRef, this._displayedTodos)
				.then(() => {
					console.log("Data saved successfully!");
				})
				.catch((error) => {
					console.warn("Data could not be saved." + error);
				});
		},
		saveTodo(todo: Todo) {
			const id = this._displayedTodos?.indexOf(todo);
			if (id !== undefined) {
				const todoRef = ref(db, "todos/" + id);
				set(todoRef, todo)
					.then(() => {
						console.log(`Todo ${id} saved successfully!`);
					})
					.catch((error) => {
						console.warn(`Todo ${id} could not be saved.`, error);
					});
			} else {
				console.warn("Todo not found in list");
			}
		},
	},
});
