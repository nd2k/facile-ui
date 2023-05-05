<script lang="ts">
	import { theme } from "$lib/themes/theme";
	import type { InputProps } from "input";

    export let type = "text";

    function typeAction(node: HTMLInputElement) {
      node.type = type
    }

    export let props: InputProps = theme.button;
    let style = `
        width: ${props.size};
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

<input 
    {style}
    use:typeAction/>