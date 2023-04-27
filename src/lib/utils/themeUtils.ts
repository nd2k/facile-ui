import { ThemeEnum } from "$lib/themes/theme";
import type { Theme } from "interfaces";

export function initializeTheme(theme: Theme): string {
    let style: string = "";
    if (theme.theme === ThemeEnum.DARK) {
        theme.colors = getDarkTheme(theme.colors);
    }
    for (const token in theme) {
        if (token === "colors") {
            for (const token2 in theme.colors) {
                for (const color in theme.colors[token2]) {
                    style += `--${token2}-color-${color}: ${theme.colors[token2][color]};`;  
                }
            }
        }
        if (token === "fonts") {
            for (const token2 in theme.fonts) {
                style += `--${token2}-font: ${theme.fonts[token2].family};`;
                // if (theme.theme === ThemeEnum.LIGHT) {
                //     style += `--${token2}-font-color: ${theme.fonts[token2].darkColor};`;  
                // } else {
                //     style += `--${token2}-font-color: ${theme.fonts[token2].lightColor};`;  
                // }
            }
        }
        if (token === "fontSizes") {
            for (const token2 in theme.fontSizes) {
                style += `--${token2}-font: ${theme.fontSizes[token2]};`;
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

// export function getPropertyFromTheme(theme: Theme, props: ThemeProps|null) {
//     let style: string = "";
//     let color: string = theme.colors.primary
//     let font: string = theme.fonts.body;
//     for (const token in theme) {
//         for (const prop in props) {
//             prop === token && token === "colors"
//             props.colors === "primary"
//             ? color = theme.colors.primary
//             : null;
//             props.colors === "secondary"
//             ? color = theme.colors.secondary
//             : null;
//         }
//     }
//     for (const token in theme) {
//         for (const prop in props) {
//             prop === token && token === "fonts"
//             props.colors === "body"
//             ? font = theme.fonts.body
//             : null;
//             props.colors === "heading"
//             ? font = theme.fonts.heading
//             : null;
//         }
//     }
//     style += `--color: ${color};`
//     style += `--font: ${font};`
//     style += "};"
//     return style;
// }