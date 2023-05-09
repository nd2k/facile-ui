<script lang="ts">
	import { cardProps } from "./card";

    export let props = cardProps;
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
    `;
</script>

<div
    {style}
    class="{$$restProps.class || "card"}">
    <!--Slot: Start-->
    {#if $$slots.start}
    <div id="card-start"><slot name="start" /></div>
    {/if}
    <!--Slot: Default-->
    <slot />
    <!--Slot: End-->
    {#if $$slots.end}
      <div id="card-end"><slot name="end" /></div>
    {/if}
</div>