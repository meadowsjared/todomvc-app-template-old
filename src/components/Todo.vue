<template>
	<li :class="{ completed: checked }">
		<div class="view">
			<input
				v-model="props.modelValue.checked"
				class="toggle"
				title="click to toggle checked"
				type="checkbox"
				@update:modelValue="toggleChecked"
			/>
			<label><input v-model="message" type="text" /></label>
			<button class="destroy" title="delete todo" @click="destroy"></button>
		</div>
		<input class="edit" value="Create a TodoMVC template" />
	</li>
</template>
<script setup lang="ts">
import type { Todo } from "../domain/Todo";
import type { PropType } from "vue";

const props = defineProps({
	modelValue: { type: Object as PropType<Todo>, required: true },
});

const emit = defineEmits(["update:modelValue", "destroyTodo"]);

const checked = ref(props.modelValue.checked);
const message = ref(props.modelValue.message);
// props.modelValue.checked = false;

// handle updating externally
watch(
	() => props.modelValue,
	(newVal) => {
		if (newVal.checked !== checked.value) {
			checked.value = newVal.checked;
			console.log("updated checked externally");
		}
		if (newVal.message !== message.value) {
			message.value = newVal.message;
			console.log("updated text externally");
		}
	}
);

watch(
	() => message.value,
	(newMessage) => {
		console.log("newMessage", newMessage);
		const newValue = props.modelValue;
		newValue.message = newMessage;
		emit("update:modelValue", newValue);
	}
);

function toggleChecked() {
	console.log("toggleChecked", props.modelValue.checked);
	const newValue = props.modelValue;
	newValue.checked = props.modelValue.checked;
	checked.value = props.modelValue.checked;
	emit("update:modelValue", newValue);
}

function destroy() {
	emit("destroyTodo");
	console.log("destroy", props.modelValue.id);
}
</script>

<style scoped>
.toggle, .destroy {
	cursor: pointer;
}
</style>