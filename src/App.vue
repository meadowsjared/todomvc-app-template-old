<template>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus />
		</header>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="sort-todos" class="toggle-all" type="checkbox" />
			<label @click="sortTodos" for="sort-todos">Sort todos</label>
			<ul class="todo-list">
				<!-- These are here just to show the structure of the list items -->
				<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
				<Todo
					v-for="(todo, index) of todoStore.todos"
					:key="todo.id"
					v-model="todoStore.todos[index]"
					@destroy-todo="destroyTodo(todo)"
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
						@click="setFilter"
						:filter="todoStore.filter"
						label="All"
						active-value="all"
					/>
				</li>
				<li>
					<Button
						@click="setFilter"
						:filter="todoStore.filter"
						label="Active"
						active-value="active"
					/>
				</li>
				<li>
					<Button
						@click="setFilter"
						:filter="todoStore.filter"
						label="Completed"
						active-value="completed"
					/>
				</li>
			</ul>
			<!-- Hidden if no completed items are left ↓ -->
			<button @click="clearCompleted" class="clear-completed">
				Clear completed
			</button>
		</footer>
	</section>
	<div @click="showChecked">{{ todoStore.todos.length }}</div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import type { Todo } from "./domain/Todo";
import { SortState } from "./domain/Todo";
import { useTodoStore } from "./stores/todo-store";

const todoStore = useTodoStore();
todoStore.loadData();

const numbers = [1, 6, 4, 3, 23, 45, 76];
let message: string = "hello world";
console.log("should I S?");

let sMessage: string = message.length > 5 ? "yes" : "no";

/**
 * Write a function that, given two strings, can detect if they are anagrams of each other.
 * For example: Given the input "heart" and "earth", the function should return true because their letters can be rearranged to create each other.
 */
function isAnagram(string1: string, string2: string): boolean {
	// sort both strings
	if (string1.length !== string2.length) return false;
	const string1Sorted = string1.split("").sort().join(""); //get a sorted version of string1
	const string2Sorted = string2.split("").sort().join(""); //get a sorted version of string1
	return string1Sorted === string2Sorted;
	// are the strings equal
}

console.log("heart is anagram of earth?", isAnagram("heart", "earth"));
console.log("stuff is anagram of things?", isAnagram("stuff", "things"));

console.log("should I S?", sMessage);

const numUpdates = ref(0);

const sortState = ref<SortState>(SortState.UNSORTED);

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

console.log(message, 1, 5, numbers, todoStore.todos);
</script>
