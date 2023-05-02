type Padding = {
    pad1: string,
    pad2?: string,
    pad3?: string,
    pad4?: string,
}

export function setPadding(padding: Padding) {
    
    return `padding: ${padding.pad1} ${padding.pad2} ${padding.pad3} ${padding.pad4};`;
}