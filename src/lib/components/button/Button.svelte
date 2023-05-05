<script lang="ts">
	import { theme } from "$lib/themes/theme";
	import { buttonProps } from "./button";

    export let props = buttonProps;
    let style = `
        width: ${props.size};
        color: ${props.color};
        border-radius: ${props.borderRadius};
        background-color: ${props.bgColor};
        border: ${props.border} solid ${props.borderColor};
        gap: ${props.gap};
        padding-top: ${props.padding?.paddingTop};
        padding-right: ${props.padding?.paddingRight};
        padding-left: ${props.padding?.paddingLeft};
        padding-bottom: ${props.padding?.paddingBottom};
    `;
</script>

<button 
    {style} 
    on:click={props.actions?.onClick} 
    on:mouseenter={props.actions?.onHover}>
    <!--Slot: Start-->
    {#if $$slots.start}
        <div id="button-start"><slot name="start" /></div>
    {/if}
    <!--Slot: Default-->
    <div class="button-content"><slot /></div>
    <!--Slot: End-->
    {#if $$slots.end}
        <div id="button-end"><slot name="end" /></div>
    {/if}
</button>

<style>
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
    }

    .button-content {
        flex: 1;
    }
</style>