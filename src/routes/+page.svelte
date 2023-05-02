<script lang="ts">
    import Button from "$lib/components/button/Button.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import { icons } from "$lib/data/icon";
	import { theme } from "$lib/themes/theme";
    function click() {
        alert("test");
    }
    let props = {...theme.button};
    props.bgColor = theme.colors.primary[100];
    props.onClick = click;
    
</script>

<div class="home-page">
    <h1>Content</h1>
    <Button {props}>
        <svelte:fragment slot="start">
            <Icon icon={icons.moon} color="var(--font-light-color)"/>
        </svelte:fragment>
        Button
        <!-- <svelte:fragment slot="end">
            <Icon icon={icons.day} color="var(--font-light-color)"/>
        </svelte:fragment> -->
    </Button>
</div>

<style>
    .home-page {
        padding: 1rem;
    }
</style>