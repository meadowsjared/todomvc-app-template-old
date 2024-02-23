<template>
	<li>
		<div class="view">
			<input
				v-model="props.modelValue.checked"
				class="toggle"
				title="click to toggle checked"
				type="checkbox"
				@update:model-value="toggleChecked"
			/>
			<label
				><input v-model="message" type="text" :class="{ completed: checked }"
			/></label>
			<button class="destroy" title="delete todo" @click="destroy" />
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

// handle updating externally
watch(
	() => props.modelValue,
	(newVal) => {
		if (newVal.checked !== checked.value) {
			checked.value = newVal.checked;
		}
		if (newVal.message !== message.value) {
			message.value = newVal.message;
		}
	}
);

watch(
	() => message.value,
	(newMessage) => {
		const newValue = props.modelValue;
		newValue.message = newMessage;
		emit("update:modelValue", newValue);
	}
);

function toggleChecked() {
	const newValue = props.modelValue;
	newValue.checked = props.modelValue.checked;
	checked.value = props.modelValue.checked;
	emit("update:modelValue", newValue);
}

function destroy() {
	emit("destroyTodo");
}
</script>

<style scoped>
.toggle .destroy {
	cursor: pointer;
}

.completed {
	color: #949494;
	text-decoration: line-through;
}

@media screen and (max-width: 700px) {
	button.destroy {
		display: flex;
	}
}
</style>
