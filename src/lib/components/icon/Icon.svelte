<script lang="ts">
	import type { Props } from "component";
	import { iconProps } from "./icon";

    export let icon: string;
    export let props: Props = {...iconProps};

    let style = `
        padding-top: ${props.padding?.paddingTop};
        padding-right: ${props.padding?.paddingRight};
        padding-left: ${props.padding?.paddingLeft};
        padding-bottom: ${props.padding?.paddingBottom};
        background-color: ${props.bgColor};
        border-top-left-radius: ${props.borderTopLeftRadius};
        border-bottom-left-radius: ${props.borderBottomLeftRadius};
        border-top-right-radius: ${props.borderTopRightRadius};
        border-bottom-right-radius: ${props.borderBottomRightRadius};
    `;
    let iconStyle = `
        color: ${props.color};
    ` ;
</script>
<div 
    {style} 
    class="{$$restProps.class + "icon" || 'icon'}">
    <svg style={iconStyle} xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24">
        {@html icon}
    </svg>
</div>

<style>
    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
