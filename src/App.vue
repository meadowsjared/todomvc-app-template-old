<template>
	<section class="todoapp">
		<header class="header">
			<h1>todos</h1>
			<input class="new-todo" placeholder="What needs to be done?" autofocus />
		</header>
		<!-- This section should be hidden by default and shown when there are todos -->
		<section class="main">
			<input id="toggle-all" class="toggle-all" type="checkbox" />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
				<!-- These are here just to show the structure of the list items -->
				<!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
				<Todo v-for="(todo, index) of todoArray" :key="index" :todo="todo" />
			</ul>
		</section>
		<!-- This footer should be hidden by default and shown when there are todos -->
		<footer class="footer">
			<!-- This should be `0 items left` by default -->
			<span class="todo-count"><strong>0</strong> item left</span>
			<!-- Remove this if you don't implement routing -->
			<ul class="filters">
				<li>
					<a class="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>
			<!-- Hidden if no completed items are left ↓ -->
			<button class="clear-completed">Clear completed</button>
		</footer>
	</section>
	{{ todoArray.length }}
</template>

<script setup lang="ts">
import type { Todo } from "./domain/Todo";
const todoArray: Todo[] = [
	{ checked: true, message: "Stay Positive" },
	{ checked: false, message: "Love Myself" },
	{ checked: true, message: "Be Grateful" },
];
const numbers = [1, 6, 4, 3, 23, 45, 76];
let message: string = "hello world";
console.log(message, 1, 5, numbers, todoArray);
</script>