///<reference path="unity.d.ts"/>
///<reference path="elementary.etc.d.ts"/>

declare var none: "empty";
declare var yes: true;
declare var no: false;
declare function trace(x: string);

declare var go: ElementaryBehaviour & {};
declare var self: ElementaryBehaviour;
declare var particle: ElementaryParticle;

declare var window: ElementaryWindow;
declare var Physics2D: ElementaryPhysics2D;
declare var game: ElementaryGame;
declare var light: ElementaryLight;
declare var ui: ElementaryUI;
declare var sys: ElementarySystem;

declare var Random: URandom;

/**
 * Content folder
 */
declare var _content: string;
/**
 * Mods folder
 */
declare var _mods: string;

declare function Vector3(x: float, y: float, z: float): UVector3D;
declare function Vector2(x: float, y: float): UVector2D;
declare function folder(x: string);

declare type HEXColorString = string;
declare type SelectorString = string;
declare function css(x: HEXColorString): Color;
declare function $(x: SelectorString): 
    UButton & 
    UGameObject & 
    MonoBehaviour & 
    UText & 
    UComponent;

/**
 * 
 * @param typeName type name 
 * @example getType('UnityEngine.UI.Text, UnityEngine.UI') --> typeof(Text)
 */
declare function getType(typeName: string): Type;

declare class ElementaryParticle extends ElementaryBehaviour 
{
    public ParticleType: ParticleType;
    public IsElectroMagnetic: boolean;
    public FreezeRotation: boolean;
    public particleColor: Color;
    public Material2D: PhysicsMaterial2D;
    public Sprite: Sprite;
    public Symbol: string;
    public Mass: Energy | float;

    public SpriteRender: SpriteRender;
    public glow: SpriteGlowEffect;
    public Collider: Collider2D;
    public ComplexBody: Rigidbody2D;
    public MagneticPole: ElectroMagnetic;

    /**
     * @implements Need Override in script component
     */
    @NeedOverride
    public getMass(): float;
    /**
     * @implements Need Override in script component
     */
    @NeedOverride
    public getLifeTime(): float;
    /**
     * @implements Need Override in script component
     */
    @NeedOverride
    public getQuantumNumber(qName: string): float;
    /**
     * @implements Need Override in script component
     */
    @NeedOverride
    public getQuarkGrid(): string;
}
/**
 * Prefab name in data.epp
 */
declare type Prefab = string;
/**
 * Sprite name in sprites.epp
 */
declare type Sprite = string;
declare class ParticleItem
{
    public name: string;
    public type: ParticleType;
    public prefab: Prefab;
    public sprite: Sprite;
}
declare class ElementaryWindow extends UIScriptableComponent
{
    public AddItem(i: ParticleItem);
}

declare class ElementaryPhysics2D
{
    public Simulate(step: float);
    public getFPS(): int;

    public get autoSimulation(): boolean;
    public set autoSimulation(x: boolean): void;
}

declare class ElementarySystem
{
    public get app(): app;
    public delta(): float;
    public fixedDelta(): float;
    public playTime(): float;
}


declare class ElementaryUI 
{
    public log(x: string);
    public warn(x: string);
    public error(x: string);
}

declare class ElementaryGame
{
    public get control(): control;
    public get animation(): ElementaryAnimationModule;
    public get info(): ElementaryInfoModule;
    public get audio(): ElementaryAudio;
    public get setting(): ElementarySettting;
    public TaskManager() : YieldWaiter;
    

    public MainCamera(): UCamera;
    /**
     * Getting Discord controller
     * @summary CALL ONLY IN onStart
     */
    public discord(): Discord;
    public get dpi(): float;
    public get isEditor(): boolean;
    public get isEditor(): NetworkReachability;
    public setResolution(x: int, y: int, z: FullScreenMode);
    public setTargetFrameRate(fps: int);
    public openURL(url: string);
    public on(event: "lowMemory" | "focusChanged", callback: Function);

    public Resources(path: string): UObject & AudioClip;
    
}

declare class ElementaryAudio
{
    public PlayShot(target: UGameObject, clip: AudioClip): void;
    public PlayDelay(target: UGameObject, clip: AudioClip, time: float): void;
    public PlayScheduled(target: UGameObject, clip: AudioClip, time: float): void;
    public IsAvailable(go: UGameObject): boolean;
    public EnableSource(go: UGameObject): void;
}

declare class ElementaryLight
{
    public GetGlobal(): Light;
    public IsAvailable(): boolean;
}


declare class ElementarySettting
{
    public static setInt(key: string, value: int): void;
    public static getInt(key: string, defaultValue?: int): int;
    public static setFloat(key: string, value: float): void;
    public static getFloat(key: string, defaultValue?: float): float;
    public static setString(key: string, value: string): void;
    public static getString(key: string, defaultValue?: string): string;
    public static hasKey(key: string): boolean;
    public static deleteKey(key: string): void;
    public static deleteAll(): void;
    public static save(): void;
}