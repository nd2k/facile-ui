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
            [key: string]: {
                [key: number|string]: string
            }
        },
        fontSizes: {
            [key: string]: string
        },
        fonts: {
            [key: string]: FontDetails
        },
    }
    export const Theme: Theme;

    interface ThemeProps {
        colors: string,
        fontSizes: string,
        fonts: string
    }
    export const ThemeProps: ThemeProps;
}