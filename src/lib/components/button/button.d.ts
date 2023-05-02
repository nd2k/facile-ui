declare module "button" {
    interface PaddingProps {
        paddingTop?: string,
        paddingRight?: string,
        paddingBottom?: string,
        paddingLeft?: string,
    }
    interface ButtonProps {
        color?: string,
        bgColor?: string,
        borderColor?: string,
        size?: string,
        onClick?: fn,
        borderRadius?: string,
        border?: string,
        gap?: string,
        padding?: PaddingProps
    }
}