import { ThemeEnum } from "$lib/themes/theme";
import type { Theme } from "default-theme";


export function initializeTheme(theme: Theme): string {
    let style: string = "";
    for (const token in theme) {
        if (token === "theme") {
            if (theme.theme === ThemeEnum.DARK) {
                theme.colors = getDarkTheme(theme.colors);
                style += `color: ${theme.fonts.families.body.lightColor};`;
            } else {
                style += `color: ${theme.fonts.families.body.darkColor};`;
            }
        }
        style += `font-family: ${theme.fonts.families.body.family};`;
        style += `font-size: ${theme.fonts.sizes.md};`;
        style += `background-color: ${theme.colors.background[100]};`;
    }
    return style;
}

function getDarkTheme(colors: {[key: string]: {[key: number]: string}})
: {[key: string]: {[key: number]: string}} {
    let darkColors: {[key: string]: {[key: number]: string}} = {};
    Object.entries(colors).forEach(([key, value]) => {
        const keys = Object.keys(value);
        const values = Object.values(value)
        const length = keys.length;
        let reversedColors: {[key: string]: string} = {};
        for (let i = 0; i < length; i++) {
            reversedColors[keys[i]] = values[length - i - 1];
        }
        darkColors[key] = reversedColors;        
    })
    return darkColors;   
}