<script lang="ts">
    import Button from "$lib/components/Button.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import { icons } from "$lib/data/icon";
</script>

<h1>Content</h1>
<Icon icon={icons.cog} />
<Button>
    <svelte:fragment slot="start">
        <Icon icon={icons.moon} color="var(--font-light-color)"/>
    </svelte:fragment>
    Btn
    <svelte:fragment slot="end">(actions)</svelte:fragment>
</Button>
