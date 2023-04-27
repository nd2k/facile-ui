<script lang="ts">
    import "$lib/styles/main.css";
	import App from "$lib/layouts/App.svelte";
	import AppHeader from "$lib/layouts/AppBar.svelte";
	import Sidebar from "$lib/layouts/Sidebar.svelte";
	import ThemeManager from "$lib/layouts/ThemeManager.svelte";
</script>

<ThemeManager>
	<App>
		<svelte:fragment slot="header">
			<AppHeader>
				<svelte:fragment slot="start">(icon)</svelte:fragment>
				(title)
				<svelte:fragment slot="end">(actions)</svelte:fragment>
			</AppHeader>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<Sidebar>
				<svelte:fragment slot="start">(head)</svelte:fragment>
				(content)
				<svelte:fragment slot="end">(footer)</svelte:fragment>
			</Sidebar>
		</svelte:fragment>
		<!--<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment> -->
		<svelte:fragment slot="pageHeader"></svelte:fragment>
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
		<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
	</App>
</ThemeManager>
