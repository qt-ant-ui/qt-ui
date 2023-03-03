<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
	name: "QtButton"
});
</script>

<template>
	<button class="qt-button">
		<slot />
	</button>
</template>

<style scoped></style>
