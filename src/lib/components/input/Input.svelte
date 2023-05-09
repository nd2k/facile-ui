<script lang="ts">
	import { inputProps } from "./input";

  export let type = "text";
  export let props = inputProps;
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

  function typeAction(node: HTMLInputElement) {
    node.type = type
  }

</script>

<div 
  class="{$$restProps.class|| "input-field"}"
  {style}>
  <!--Slot: Start-->
  {#if $$slots.start}
  <div id="input-start"><slot name="start" /></div>
  {/if}
  <!--Slot: Default-->
  <input use:typeAction placeholder={props.placeholder} />
  <!--Slot: End-->
  {#if $$slots.end}
    <div id="input-end"><slot name="end" /></div>
  {/if}
</div>

<style>
  .input-field {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: auto;
    }
    input {
      flex: 1;
    }
</style>