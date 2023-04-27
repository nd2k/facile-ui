<script lang="ts">
    import "$lib/styles/main.css";
	import App from "$lib/layouts/App.svelte";
	import AppHeader from "$lib/layouts/AppHeader.svelte";
	import Sidebar from "$lib/layouts/Sidebar.svelte";
	import ThemeManager from "$lib/components/ThemeManager.svelte";
</script>

<ThemeManager>
	<App>
		<!-- <svelte:fragment slot="header">Header</svelte:fragment>-->
		<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
		<!--<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
		<svelte:fragment slot="pageHeader">
			<AppHeader>
				<svelte:fragment slot="start">(icon)</svelte:fragment>
				(title)
				<svelte:fragment slot="end">(actions)</svelte:fragment>
			</AppHeader>
		</svelte:fragment>
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
		<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
	</App>
</ThemeManager>
