export interface Todo {
	checked: boolean;
	message: string;
	id: number;
	active: boolean;
}

export enum SortState {
	UNSORTED,
	ASCENDING,
	DESCENDING,
}
