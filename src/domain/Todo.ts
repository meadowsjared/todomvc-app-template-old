export interface Todo {
	checked: boolean;
	message: string;
	id: number;
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
