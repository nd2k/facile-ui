import { borders } from "./borders";
import { colors } from "./colors";
import { margins } from "./margin";
import { paddings } from "./padding";

export const props = {
    color: colors.font[900],
    bgColor: colors.primary[500],
    borderColor: colors.primary[800],
    size: "auto",
    border: borders,
    padding: paddings.sm,
    margin: margins.sm,
}