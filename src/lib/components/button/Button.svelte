<script lang="ts">
	import { buttonProps } from "./button";

    export let href: string|null = null;
    export let props = buttonProps;
    export let hoverEffect: boolean = true;
    let style = `
        width: ${props.size};
        color: ${props.color};
        border-top-left-radius: ${props.borderTopLeftRadius};
        border-bottom-left-radius: ${props.borderBottomLeftRadius};
        border-top-right-radius: ${props.borderTopRightRadius};
        border-bottom-right-radius: ${props.borderBottomRightRadius};
        background-color: ${props.bgColor};
        border: ${props.border} solid ${props.borderColor};
        gap: ${props.gap};
        padding-top: ${props.padding?.paddingTop};
        padding-right: ${props.padding?.paddingRight};
        padding-left: ${props.padding?.paddingLeft};
        padding-bottom: ${props.padding?.paddingBottom};
        --translate: ${hoverEffect ? "3px" : "0px"};
        --brightness: ${hoverEffect ? "80%" : "100%"};
    `;
</script>

{#if href === null}
    <button 
        {style}
        class="{$$restProps.class || ""}"
        on:click={props.actions?.onClick}>
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
{:else}
    <a 
        {href}
        {style}
        class="{$$restProps.class || ""}"
        on:click={props.actions?.onClick} 
        on:mouseenter={props.actions?.onMouseEnter}>
        {#if $$slots.start}
            <div id="link-start"><slot name="start" /></div>
        {/if}
        <!--Slot: Default-->
        <div class="link-content"><slot /></div>
        <!--Slot: End-->
        {#if $$slots.end}
            <div id="link-end"><slot name="end" /></div>
        {/if}
    </a>
{/if}

<style>
    button, 
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: auto;
    }
    button:hover,
    a:hover {
        filter: brightness(var(--brightness));
        transform: translateY(var(--translate));
    }
</style>