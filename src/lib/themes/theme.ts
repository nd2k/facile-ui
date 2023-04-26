export enum ThemeEnum {
    LIGHT = "light",
    DARK = "dark"
}

export const theme = {
    theme: ThemeEnum.DARK,
    colors: {
        primary: {
            100: "#cce2e4",
            200: "#99c5c9",
            300: "#66a7ad",
            400: "#338a92",
            500: "#006d77",
            600: "#00575f",
            700: "#004147",
            800: "#002c30",
            900: "#001618"
        },
        secondary: {
            100: "#ffeecc",
            200: "#ffdd99",
            300: "#ffcd66",
            400: "#ffbc33",
            500: "#ffab00",
            600: "#cc8900",
            700: "#996700",
            800: "#664400",
            900: "#332200"
        },
        background: {
            100: "#fdfdfd",
            200: "#fbfbfb",
            300: "#f9f9f9",
            400: "#f7f7f7",
            500: "#f5f5f5",
            600: "#c4c4c4",
            700: "#939393",
            800: "#626262",
            900: "#313131"
        }
    },
    fontSizes: {
        xs: "0.5rem",
        sm: "0.8rem", 
        md: "1rem",
        lg: "1.2rem",
        xl: "2rem"
    },
    fonts: {
        body: {
            family: '"Roboto"',
            url: "https://fonts.googleapis.com/css2?family=DM+Sans&family=Poppins:wght@100&family=Roboto:wght@300",
            darkColor: "#000000",
            lightColor: "#ffffff"
        },
    },
}