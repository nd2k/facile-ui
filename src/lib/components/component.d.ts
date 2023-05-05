declare module "component" {
    interface Actions {
        onClick?: fn,
        onHover?: fn
    }
    interface Props {
        color?: string,
        bgColor?: string,
        borderColor?: string,
        size?: string,
        borderRadius?: string,
        border?: string,
        gap?: string,
        padding?: Padding
        actions?: Actions
    }
}