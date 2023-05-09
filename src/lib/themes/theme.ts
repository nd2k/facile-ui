import { borders } from "./borders";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { margins } from "./margin";
import { paddings } from "./padding";
import { props } from "./props";

export enum ThemeEnum {
    LIGHT = "light",
    DARK = "dark"
}

export const theme = {
    theme: ThemeEnum.DARK,
    colors: colors,
    fonts: fonts,
    borders: borders,
    paddings: paddings,
    margins: margins,
    button: props
}