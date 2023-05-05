<script lang="ts">
	import { themeStore } from "$lib/store/themestore";
	import { initializeTheme } from "$lib/utils/themeUtils";

    let style: string;
    let url: string;
    
    style = initializeTheme($themeStore);
    url = $themeStore.fonts.families.body.url
</script>

<svelte:head>
    <title>Facile-UI SvelteKit Framework - The easiest way to develop
        a front-end application.
    </title>
	<link href={url} rel="stylesheet" />
</svelte:head>

<div {style}>
    <slot />
</div>

