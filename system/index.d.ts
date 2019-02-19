declare global {
    type float = number;
    type long = number;
    type int = number;
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
        value__: int;
        Equals(o): boolean,
        GetHashCode(): int;
        ToString(): string;
        HasFlag(flag: int): boolean;
    }
}
export { }