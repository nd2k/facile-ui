import { theme } from "$lib/themes/theme";
import type { Props } from "component";

export const inputProps: Props = {
    color: theme.fonts.families.body.darkColor,
    bgColor: theme.colors.font[900],
    borderBottomLeftRadius: theme.borders.radius,
    borderBottomRightRadius: theme.borders.radius,
    borderTopLeftRadius: theme.borders.radius,
    borderTopRightRadius: theme.borders.radius,
    border: "0",
    borderColor: theme.colors.primary[800],
    padding: theme.paddings.sm,
    gap: "0.5rem",
    actions: {
        onClick: () => console.log("button click")
    },
    placeholder: "Placeholder"
}