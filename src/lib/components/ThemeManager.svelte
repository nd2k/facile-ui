<script lang="ts">
	import { themeStore } from "$lib/store/themestore";
	import { initializeTheme } from "$lib/utils/themeUtils";

    let style: string;
    let url: string;
    
    style = `${initializeTheme($themeStore)}`;
    url = $themeStore.fonts.body.url;
</script>

<svelte:head>
	<link href={url} rel="stylesheet" />
</svelte:head>

<div {style}>
    <slot />
</div>

