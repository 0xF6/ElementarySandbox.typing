/// <reference path="./../system/index.d.ts" />
declare global {
    class ListConverter<T>
    {
        constructor(type: "string" | "int");
        Convert(x: T[]) : List<T>
    }
}
export {}