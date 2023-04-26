<script lang="ts">
	import ThemeManager from "$lib/components/ThemeManager.svelte";

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
	<header>Header</header>
    <div class="content">
        <aside>Aside</aside>
        <main>Main</main>
        <footer>Footer</footer>
    </div>
    
</div>

<style>
    #app {
        display: flex;
        flex-flow: row wrap;
        min-height: 100vh;
        overflow-y: hidden;
    }
    /* We tell all items to be 100% width, via flex-basis */
    header {
        flex: 1;
    }

    .content {
        display: flex;
        flex-direction: row;
        flex: 1;
    }

    aside {
        flex: 1 40%;
    }
    main {
        flex: 1 auto;
    }
    footer {
        flex: 1 100%;
    }
</style>