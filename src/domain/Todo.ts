export interface Todo {
	checked: boolean;
	message: string;
	/** used to uniquely identify todos within the app */
	id: number;
	/** used to track the todos in the Firebase realtime database */
	key: number;
}

export interface Label {
	displayText: string;
	value: string;
}

export enum SortState {
	UNSORTED,
	ASCENDING,
	DESCENDING,
}

export function newOnboardingTodo(message: string, id: number): Todo {
	const todo: Todo = {
		checked: false,
		message,
		id,
		key: id,
	};
	return todo;
}