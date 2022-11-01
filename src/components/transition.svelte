<script lang="ts">
	import { fade } from 'svelte/transition'

	export let url: URL
</script>

{#key url}
	<div
		in:fade={{ duration: 250, delay: 300 }}
	>
		<slot />
	</div>
{/key}
