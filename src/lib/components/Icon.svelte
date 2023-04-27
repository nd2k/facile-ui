<script lang="ts">
    export let icon: string;
    export let size: string = "1rem";
    export let color: string = "var(--primary-color-500)";

    let style = `color: ${color}`;
</script>
<div class="icon">
    <svg {style} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
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
