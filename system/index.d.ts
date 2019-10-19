declare global {
    type f32 = number;
    type long = number;
    type i32 = number;
    type ulong = number;
    type uint = number;
    type short = number;
    type ushort = number;
    type decimal = number;

    /**
     * System Type
     */
    interface Type { }

    interface List<T> extends Array<T> {}

    interface Enum
    {
        value__: i32;
        Equals(o): boolean,
        GetHashCode(): i32;
        ToString(): string;
        HasFlag(flag: i32): boolean;
    }
}
type int = number;

export { }