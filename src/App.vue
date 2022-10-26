<template>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<input
				v-model="newTodo"
				class="new-todo"
				placeholder="What needs to be done?"
				autofocus
				@keypress.enter="handleAddTodo"
			/>
		</header>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="sort-todos" class="toggle-all" type="checkbox" />
			<label
				for="sort-todos"
				class="sort-arrow"
				:class="{
					'sort-arrow-right': sortState === SortState.UNSORTED,
					'sort-arrow-up': sortState === SortState.ASCENDING,
					'sort-arrow-down': sortState === SortState.DESCENDING,
				}"
				@click="sortTodos"
				>Sort todos</label
			>
			<ul v-if="todoStore.todos" class="todo-list">
				<!-- These are here just to show the structure of the list items -->
				<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
				<Todo
					v-for="(todo, index) of todoStore.todos"
					:key="todo.id"
					v-model="todoStore.todos[index]"
					@destroy-todo="destroyTodo(todo)"
					@update:model-value="todoUpdated"
				/>
			</ul>
		</section>
		<!-- This footer should be hidden by default and shown when there are todos -->
		<footer class="footer">
			<!-- This should be `0 items left` by default -->
			<span class="todo-count"
				><strong>{{ todoStore.tasksLeft }}</strong> item{{
					todoStore.tasksLeft === 1 ? "" : "s"
				}}
				left</span
			>
			<!-- Remove this if you don't implement routing -->
			<ul class="filters">
				<li>
					<Button
						type="button"
						:active="'all' === todoStore.filter"
						:label="{ displayText: 'All', value: 'all' }"
						@click="setFilter"
					/>
				</li>
				<li>
					<Button
						type="button"
						:active="'unchecked' === todoStore.filter"
						:label="{ displayText: 'Unchecked', value: 'unchecked' }"
						@click="setFilter"
					/>
				</li>
				<li>
					<Button
						type="button"
						:active="'checked' === todoStore.filter"
						:label="{ displayText: 'Checked', value: 'checked' }"
						@click="setFilter"
					/>
				</li>
			</ul>
			<!-- Hidden if no completed items are left ↓ -->
			<button type="button" class="clear-completed" @click="clearCompleted">
				Clear completed
			</button>
		</footer>
	</section>
	<div @click="showChecked">{{ todoStore.todos?.length }}</div>
</template>

<script setup lang="ts">
import { SortState } from "./domain/Todo";
import { useTodoStore } from "./stores/todo-store";
import type { Todo } from "./domain/Todo";

const todoStore = useTodoStore();
todoStore.loadData();

const numbers = [1, 6, 4, 3, 23, 45, 76];
let message = "hello world";
console.log("should I S?");

let sMessage: string = message.length > 5 ? "yes" : "no";

/**
 * Write a function that, given two strings, can detect if they are anagrams of each other.
 * For example: Given the input "heart" and "earth", the function should return true because their letters can be rearranged to create each other.
 */
function isAnagram(string1: string, string2: string): boolean {
	// sort both strings
	if (string1.length !== string2.length) return false;
	const string1Sorted = [...string1].sort().join(""); //get a sorted version of string1
	const string2Sorted = [...string2].sort().join(""); //get a sorted version of string1
	return string1Sorted === string2Sorted;
	// are the strings equal
}

console.log("heart is anagram of earth?", isAnagram("heart", "earth"));
console.log("stuff is anagram of things?", isAnagram("stuff", "things"));

console.log("should I S?", sMessage);

const numUpdates = ref(0);

const sortState = ref<SortState>(SortState.UNSORTED);
const newTodo = ref("");

function showChecked() {
	console.log("showChecked");
}

function destroyTodo(todo: Todo) {
	todoStore.destroyTodo(todo);
}

function clearCompleted() {
	todoStore.clearCompleted();
}

function showAll() {
	todoStore.setFilter("all");
}

function showActive() {
	todoStore.setFilter("active");
}

function showCompleted() {
	todoStore.setFilter("completed");
}

function setFilter(filter: string) {
	todoStore.setFilter(filter);
}

// three possible states
// 1. unsorted
// 2. sorted by checked (ascending)
// 3. sorted by checked (descending)

function sortTodos() {
	sortState.value = (sortState.value + 1) % 3;
	if (sortState.value === SortState.UNSORTED) {
		console.log("sortTodos", "SortState.UNSORTED");
	}
	if (sortState.value === SortState.ASCENDING) {
		console.log("sortTodos", "SortState.ASCENDING");
	}
	if (sortState.value === SortState.DESCENDING) {
		console.log("sortTodos", "SortState.DESCENDING");
	}

	todoStore.setSort(sortState.value);
}

function handleAddTodo() {
	console.log("addTodo", newTodo.value);
	todoStore.addTodo(newTodo.value);
	newTodo.value = "";
}

function todoUpdated(todo: Todo) {
	todoStore.saveTodos();
}

console.log(message, 1, 5, numbers, todoStore.todos);
</script>

<style scoped>
label.sort-arrow-right::before {
	transform: rotate(0deg);
}
label.sort-arrow-up::before {
	transform: rotate(270deg);
}
label.sort-arrow-down::before {
	transform: rotate(90deg);
}
label.sort-arrow::before {
	transition: transform 0.3s ease-in-out;
}
</style>
