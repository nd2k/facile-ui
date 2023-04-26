<script lang="ts">
    import "$lib/styles/main.css";
	import App from "$lib/layouts/App.svelte";
	import AppHeader from "$lib/layouts/AppHeader.svelte";
	import Sidebar from "$lib/layouts/Sidebar.svelte";
</script>

<App>
    <!-- <svelte:fragment slot="header"><AppHeader /></svelte:fragment>
    <svelte:fragment slot="sidebarLeft"><Sidebar /></svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer">Footer</svelte:fragment> -->
</App>
