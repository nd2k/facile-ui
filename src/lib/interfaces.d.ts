import type { ButtonProps } from "button"

declare module "interfaces" {
    interface FontDetails {
        family: string,
        url: string,
        darkColor: string,
        lightColor: string
    }
    interface Theme {
        theme: string
        colors: {
            [prop: string]: {
                [prop: number|string]: string
            }
        },
        fontSizes: {
            [prop: string]: string
        },
        fonts: {
            [prop: string]: FontDetails
        },
        button: ButtonProps,
        [prop: string] : {
            [prop: string]: string
        }
    }
    export const Theme: Theme;

    interface ThemeProps {
        colors: string,
        fontSizes: string,
        fonts: string
    }
    export const ThemeProps: ThemeProps;
}