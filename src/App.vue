<template>
	<section class="todoapp">
		<form class="header" @submit.prevent="handleAddTodo">
			<h1>Jared's Todos</h1>
			<input
				type="text"
				v-model="newTodo"
				class="new-todo"
				placeholder="What needs to be done?"
				autofocus
			/>
		</form>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="sort-todos" class="toggle-all" type="checkbox" />
			<label
				for="sort-todos"
				title="Sort todos"
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
					v-for="todo of todoStore.todos"
					:key="todo.id"
					v-model="
						todoStore.todos[
							todoStore.todos.findIndex((pTodo) => todo.id === pTodo.id)
						]
					"
					@destroy-todo="destroyTodo(todo)"
					@update:model-value="todosUpdated(todo)"
				/>
				<empty-todos v-if="todoStore.todos.length === 0" />
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
</template>

<script setup lang="ts">
import { SortState } from "./domain/Todo";
import { useTodoStore } from "./stores/todo-store";
import type { Todo } from "./domain/Todo";

const todoStore = useTodoStore();
todoStore.loadData();

const numUpdates = ref(0);

const sortState = ref<SortState>(SortState.UNSORTED);
const newTodo = ref("");

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

/**
 * There are three possible states:
 * 1. unsorted
 * 2. sorted by checked (ascending)
 * 3. sorted by checked (descending)
 */
function sortTodos() {
	sortState.value = (sortState.value + 1) % 3;
	todoStore.setSort(sortState.value);
}

function handleAddTodo() {
	setTimeout(() => {
		todoStore.addTodo(newTodo.value);
		newTodo.value = "";
	}, 0);
}

function todosUpdated(todo: Todo) {
	todoStore.updateTodo(todo);
}

</script>

<style scoped>
.toggle-all, label.sort-arrow {
	cursor: pointer;
}
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
