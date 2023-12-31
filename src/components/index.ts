export * from "./SocialMedia"
export * from "./Communication"

export interface SvgProps {
    size?: number;
}

export type FixedLengthArray<T, N extends number> = [T, ...T[]] & { length: N };
