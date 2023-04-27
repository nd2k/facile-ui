<script lang="ts">
</script>

<div class="sidebar">
    <!-- Slot: SideHeader-->
    {#if $$slots.start}
        <div id="sidebar-header"><slot name="start" /></div>
    {/if}
    <!--Slot: Default-->
    <div class="sidebar-content"><slot /></div>
    <!-- Slot: SideFooter-->
    {#if $$slots.end}
        <div id="sidebar-footer"><slot name="end" /></div>
    {/if}
</div>

<style>
    .sidebar {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 1rem;
    }
    .sidebar-content {
        flex: 5;
    }
</style>