<script lang="ts">
    import Button from "$lib/components/Button.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import { icons } from "$lib/data/icon";
</script>

<div class="home-page">
    <h1>Content</h1>
    <Button>
        <svelte:fragment slot="start">
            <Icon icon={icons.moon} color="var(--font-light-color)"/>
        </svelte:fragment>
        Button
        <!-- <svelte:fragment slot="end">(actions)</svelte:fragment> -->
    </Button>
</div>

<style>
    .home-page {
        padding: 1rem;
    }
</style>