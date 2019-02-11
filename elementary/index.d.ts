/// <reference path="./components.d.ts" />

declare var none: "empty";
declare var yes: true;
declare var no: false;
declare function trace(x: string);

declare var go: ElementaryBehaviour & {};
//declare var self: Unity.ElementaryBehaviour;
declare var particle: ElementaryParticle;

//declare var window: Unity.ElementaryWindow;
declare var Physics2D: ElementaryPhysics2D;
declare var game: ElementaryGame;
declare var light: ElementaryLight;
declare var ui: ElementaryUI;

declare var sys: ElementarySystem;


/**
 * Content folder
 */
declare var _content: string;
/**
 * Mods folder
 */
declare var _mods: string;
/**
 * Create Vector3D
 * @param x x axis
 * @param y y axis
 * @param z z axis
 */
declare function Vector3(x: float, y: float, z: float): UVector3D;
/**
 * Create Vector2D
 * @param x x axis
 * @param y y axis
 */
declare function Vector2(x: float, y: float): UVector2D;
/**
 * Get Full Path
 * @param x relative path
 */
declare function folder(x: string);

declare type HEXColorString = string;

declare type SelectorString = string;
/**
 * @example css("#FFF") -> Color.white
 */
declare function css(x: string): Color;
/**
 * 
 * @param x 
 * @example $<TypeOfComponent>("GameObject>Path>In>Hierarchy>And>[TypeOfComponent]") -> TypeOfComponent Instance
 */
declare function $<T>(x: SelectorString): T;

/**
 * 
 * @param typeName type name 
 * @example getType('UnityEngine.UI.Text, UnityEngine.UI') --> typeof(Text)
 */
declare function getType(typeName: string): Type;