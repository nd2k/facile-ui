<nav class="navbar">
    <div class="navbar-content">
        <!-- Slot: Start-->
        {#if $$slots.start}
            <div class="navbar-start"><slot name="start" /></div>
        {/if}
        <!-- Slot: Default-->
        <div class="navbar-default"><slot /></div>
        <!-- Slot: End-->
        {#if $$slots.end}
            <div class="navbar-end"><slot name="end" /></div>
        {/if}
    </div>    
</nav>

<style>
    nav {
        background-color: var(--primary-color-700);
        color: var(--font-color-100);
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .navbar-content {
        display: flex;
        justify-content: space-around;
    }
</style>