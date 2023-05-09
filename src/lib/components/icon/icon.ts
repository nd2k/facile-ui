import { theme } from "$lib/themes/theme";
import type { Props } from "component";

export const iconProps: Props = {
    color: theme.colors.font[100],
    bgColor: "inherent",
    borderTopLeftRadius: theme.borders.radius,
    borderTopRightRadius: theme.borders.radius,
    borderBottomLeftRadius: theme.borders.radius,
    borderBottomRightRadius: theme.borders.radius,
    border: theme.borders.solid,
    borderColor: theme.colors.primary[800],
    padding: theme.paddings.lg,
    size: "1rem"
}