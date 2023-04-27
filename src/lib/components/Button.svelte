<script lang="ts">


</script>

<button>
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
        border: 1px solid var(--primary-color-500);
        background-color: var(--primary-color-300);
        padding: 0.5rem;
        gap: 0.2rem;
        cursor: pointer;
        width: 50%;
    }

    .button-content {
        flex: 1;
    }
</style>