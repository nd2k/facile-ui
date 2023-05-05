<script lang="ts">
    import Button from "$lib/components/button/Button.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import Input from "$lib/components/input/Input.svelte";
	import { icons } from "$lib/data/icon";
	import { theme } from "$lib/themes/theme";
    function click() {
        alert("test");
    }
    
</script>

<div class="home-page">
    <h1>Content</h1>
    <Button>
        <svelte:fragment slot="start">
            <Icon icon={icons.moon} color="var(--font-light-color)"/>
        </svelte:fragment>
        Button
        <!-- <svelte:fragment slot="end">
            <Icon icon={icons.day} color="var(--font-light-color)"/>
        </svelte:fragment> -->
    </Button>
    <Input />
</div>

<style>
    .home-page {
        padding: 1rem;
    }
</style>