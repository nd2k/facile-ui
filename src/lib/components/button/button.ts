import { theme } from "$lib/themes/theme";
import type { Props } from "component";

export const buttonProps: Props = {
    color: theme.fonts.families.body.lightColor,
    bgColor: theme.colors.primary[600],
    borderRadius: theme.borders.radius,
    border: theme.borders.solid,
    borderColor: theme.colors.primary[800],
    padding: theme.paddings.md,
    gap: "0.5rem",
    actions: {
        onClick: () => console.log("button click"),
        onHover: () => {
            console.log("hover");
            
            buttonProps.bgColor = theme.colors.secondary[500];
        }
    }
}