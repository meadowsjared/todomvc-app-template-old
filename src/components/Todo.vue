<template>
	<li :class="{ completed: checked }">
		<div class="view">
			<input
				v-model="props.modelValue.checked"
				class="toggle"
				type="checkbox"
				@update:modelValue="toggleChecked"
			/>
			<label><input v-model="message" type="text" /></label>
			<button class="destroy" @click="destroy"></button>
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
