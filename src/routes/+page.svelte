<script lang="ts">
	import { buttonProps } from "$lib/components/button/button";
    import Button from "$lib/components/button/Button.svelte";
	import Icon from "$lib/components/icon/Icon.svelte";
	import Input from "$lib/components/input/Input.svelte";
	import { icons } from "$lib/components/icon/iconData";
	import { theme } from "$lib/themes/theme";
	import type { Props } from "component";
	import { inputProps } from "$lib/components/input/input";
	import { iconProps } from "$lib/components/icon/icon";
	import Card from "$lib/components/card/card.svelte";

    let props: Props = {...buttonProps};
    props.color = theme.colors.font[900];
    props.bgColor = theme.colors.secondary[500];
    props.padding = {
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
    };
    props.actions = {
            onClick: () => console.log("href click")
    };
    props.border = "0";

    let propsBtn2: Props = {...buttonProps};
    propsBtn2.padding = theme.paddings.lg;
    propsBtn2.color = theme.colors.font[900];
    propsBtn2.bgColor = theme.colors.secondary[500];
    propsBtn2.borderBottomLeftRadius = "0";
    propsBtn2.borderTopLeftRadius = "0";
    propsBtn2.border = "0"

    let propsIcon: Props = {...iconProps};
    propsIcon.borderTopRightRadius = "0";
    propsIcon.borderBottomRightRadius = "0";

    let propsInput: Props = {...inputProps};
    propsInput.bgColor = theme.colors.background[900];
    propsInput.padding = theme.paddings.xs;
    propsInput.gap = "1rem";
</script>

<div class="home-page">
    <h1>Content</h1>
    <div class="content">
        <Button>
            <svelte:fragment slot="start">
                <Icon icon={icons.moon} />
            </svelte:fragment>
            Button
            <!-- <svelte:fragment slot="end">
                <Icon icon={icons.day} color="var(--font-light-color)"/>
            </svelte:fragment> -->
        </Button>
        <Button href="/" {props}>
            <svelte:fragment slot="start">
                <Icon icon={icons.moon}/>
            </svelte:fragment>
            Button
            <!-- <svelte:fragment slot="end">
                <Icon icon={icons.day} color="var(--font-light-color)"/>
            </svelte:fragment> -->
        </Button>
        <Input props={propsInput}>
            <svelte:fragment slot="start">
                <Icon icon={icons.moon} props={propsIcon}/>
            </svelte:fragment>
            <svelte:fragment slot="end">
                <Button props={propsBtn2} hoverEffect={false}>
                    Submit
                </Button>
            </svelte:fragment>
        </Input>
        <Card>
            <svelte:fragment slot="start">
                <h1>Head</h1>
            </svelte:fragment>
            <p>Body</p>
            <svelte:fragment slot="end">
                <Button>
                    Submit
                </Button>
            </svelte:fragment>
        </Card>
    </div>
   
</div>

<style>
    .home-page {
        padding: 1rem;
    }
</style>