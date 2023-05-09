<script lang="ts">
    import "$lib/styles/main.css";
	import App from "$lib/layouts/App.svelte";
	import AppHeader from "$lib/layouts/AppBar.svelte";
	import Sidebar from "$lib/layouts/Sidebar.svelte";
	import ThemeManager from "$lib/layouts/ThemeManager.svelte";
	import Button from "$lib/components/button/Button.svelte";
	import { buttonProps } from "$lib/components/button/button";
	import type { Props } from "component";
	import { borders } from "$lib/themes/borders";

	let btnProps: Props = buttonProps;
	btnProps.bgColor = "inherent";
	btnProps.border = "0";

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
				<!-- <svelte:fragment slot="start">(head)</svelte:fragment> -->
				<div class="sidebar-menu">
					<ul>
						<li>
							<Button href="/" props={btnProps}>
								Home
							</Button>
						</li>
						<li>
							<Button href="/about" props={btnProps}>
								About
							</Button>
						</li>
					</ul>
				</div>
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

<style>

</style>
