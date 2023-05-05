declare module "default-theme" {
    interface Colors {
        [prop: string]: {
            [prop: number|string]: string
        }
    }
    export const Colors: Colors
    interface FontDetails {
        family: string,
        url: string,
        darkColor: string,
        lightColor: string
    }
    interface Fonts {
        sizes: {
            [prop: string]: string
        },
        families: {
            [prop: string]: FontDetails
        }
    }
    interface Border {
        [prop: string]: string
    }
    interface Padding {
        paddingTop?: string,
        paddingRight?: string,
        paddingBottom?: string,
        paddingLeft?: string,
    }
    export const Padding: Padding
    interface Margin {
        marginTop?: string,
        marginRight?: string,
        marginBottom?: string,
        marginLeft?: string,
    }
    export const Margin: Margin
    interface Theme {
        theme: string
        colors: Colors
        fonts: Fonts,
        borders: Border,
        paddings: {
            [prop: string]: Padding
        },
        margins: {
            [prop: string]: Margin
        },
    }
    export const Theme: Theme;

    // interface ThemeProps {
    //     colors: string,
    //     fontSizes: string,
    //     fonts: string
    // }
    // export const ThemeProps: ThemeProps;
}