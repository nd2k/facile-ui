import { ThemeEnum } from "$lib/themes/theme";
import type { Theme } from "interfaces";

export function initializeTheme(theme: Theme): string {
    let style: string = "";
    for (const token in theme) {
        if (token === "theme") {
            if (theme.theme === ThemeEnum.DARK) {
                theme.colors = getDarkTheme(theme.colors);
            }
        }
        else if (token === "colors") {
            for (const token2 in theme.colors) {
                for (const color in theme.colors[token2]) {
                    style += `--${token2}-color-${color}: ${theme.colors[token2][color]};`;  
                }
            }
        }
        else if (token === "fonts") {
            for (const token2 in theme.fonts) {
                style += `--${token2}-font: ${theme.fonts[token2].family};`;
            }
        }
        else if (token === "fontSizes") {
            for (const token2 in theme.fontSizes) {
                style += `--${token2}-font: ${theme.fontSizes[token2]};`;
            }
        }
        else {
            for (const token2 in theme[token]) {
                style += `--${token}-${token2}: ${theme[token][token2]};`;
            }
        }
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