import { theme } from "$lib/themes/theme";
import type { Props } from "component";

export const buttonProps: Props = {
    color: theme.fonts.families.body.lightColor,
    bgColor: theme.colors.primary[500],
    borderBottomLeftRadius: theme.borders.radius,
    borderBottomRightRadius: theme.borders.radius,
    borderTopLeftRadius: theme.borders.radius,
    borderTopRightRadius: theme.borders.radius,
    border: theme.borders.solid,
    borderColor: theme.colors.primary[800],
    padding: theme.paddings.lg,
    gap: "0.5rem",
    actions: {
        onClick: () => console.log("button click")
    }
}