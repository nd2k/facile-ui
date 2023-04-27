<script lang="ts">
    // Slots
	/** @slot header - Insert fixed header content, such as Skeleton's App Bar component.
	 * @slot sidebarLeft - Hidden when empty. Allows you to set fixed left sidebar content.
	 * @slot sidebarRight - Hidden when empty. Allows you to set fixed right sidebar content.
	 * @slot pageHeader - Insert content that resides above your page content. Great for global alerts.
	 * @slot pageFooter - Insert content that resides below your page content. Recommended for most layouts.
	 * @slot footer - Insert fixed footer content. Not recommended for most layouts.
	 */
</script>

<div id="app" class="{$$restProps.class}">
    <!-- Slot: Header -->
	{#if $$slots.header}
        <header id="app-header"><slot name="header" /></header>
    {/if}

    <!-- Content Area -->
    <div id="app-content">
        <!-- Slot: Sidebar (left) -->
        {#if $$slots.sidebarLeft}
            <aside id="sidebar-left"><slot name="sidebarLeft" /></aside>
        {/if}

        <!-- Page -->
        <div id="page" on:scroll>
            <!-- Slot: Page Header -->
            {#if $$slots.pageHeader}
                <header id="page-header"><slot name="pageHeader"></slot></header>
            {/if}

            <!-- Slot: Page Content (default) -->
            <main id="page-content"><slot /></main>

            <!-- Slot: Page Footer -->
            {#if $$slots.pageFooter}
                <footer id="page-footer"><slot name="pageFooter"></slot></footer>
            {/if}
        </div>

        <!-- Slot: Sidebar (right) -->
        {#if $$slots.sidebarRight}
            <aside id="sidebar-right"><slot name="sidebarRight" /></aside>
        {/if}
    </div>

    <!-- Slot: footer -->
    {#if $$slots.footer}
        <footer id="app-footer"><slot name="footer" /></footer>
    {/if}
    
</div>

<style>
    #app {
        display: flex;
        flex-flow: column wrap;
        min-height: 100vh;
        overflow-y: hidden;
    }

    #app-header {
        flex: 1;
    }

    #app-content {
        flex: 5;
        display: flex;
        flex-direction: row wrap;
    }

    #sidebar-left {
        flex: 1;
    }

    #page {
        display: flex;
        flex-direction: column;
        flex: 4;
    }

    #page-header {
        flex: 0;
    }

    #page-content {
        flex: 5;
    }

    #page-footer {
        flex: 1;
    }

    #sidebar-right {
        flex: 1;
    }

    #app-footer {
        flex: 1;
    }

</style>