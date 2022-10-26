<template>
	<a
		:class="{ selected: active }"
		href="#/"
		@click="$emit('click', label.value)"
		>{{ label.displayText }}</a
	>
</template>

<script setup lang="ts">
import type { Label } from "../domain/Todo";

defineProps<{
	// label: string;
	active: boolean;
	// value: string;
	label: Label;
}>();

defineEmits<{
	(event: "click", value: string): void;
}>();
</script>
