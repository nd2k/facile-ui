<script lang="ts">
    export let width: string = "40%";
    export let height: string = "100%";

    let style = `
        width: ${width};
        height: ${height};
    `;
</script>

<div 
    class="sidebar"
    {style}>
    Sidebar
</div>

<style>
    .sidebar {
        background-color: var(--secondary-color-100);
    }
</style>