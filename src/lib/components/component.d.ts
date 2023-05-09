declare module "component" {
    interface Actions {
        onClick?: fn,
        onMouseEnter?: fn
    }
    interface Props {
        color?: string,
        bgColor?: string,
        borderColor?: string,
        size?: string,
        borderTopLeftRadius?: string,
        borderBottomLeftRadius?: string,
        borderTopRightRadius?: string,
        borderBottomRightRadius?: string,
        border?: string,
        gap?: string,
        padding?: Padding
        actions?: Actions,
        placeholder?: string,
    }
}