///<reference path="unity.d.ts"/>
///<reference path="elementary.etc.d.ts"/>

declare var none: "empty";
declare var yes: true;
declare var no: false;
declare function trace(x: string);

declare var go: ElementaryBehaviour;
declare var self: ElementaryBehaviour;
declare var particle: ElementaryParticle;
declare var window: ElementaryWindow;
declare var Physics2D: ElementaryPhysics2D;
declare var game: ElementaryGame;

/**
 * Content folder
 */
declare var _content: string;
/**
 * Mods folder
 */
declare var _mods: string;


declare function folder(x: string);

declare type HEXColorString = string;
declare type SelectorString = string;
declare function css(x: HEXColorString): Color;
declare function $(x: SelectorString): 
    UButton & 
    UGameObject & 
    MonoBehaviour & 
    UText & 
    UComponent & 
    DiscordController

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

    public getMass(): float;
    public getLifeTime(): float;
    public getQuantumNumber(qName: string): float;
    /**
     * Get Quark grid list
     */
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


declare class DiscordController extends MonoBehaviour
{
    /**
     * OnConnected Discord Event
     */
    public onConnect: UnityEvent;
    /**
     * Is Authed in Discord API
     */
    public IsAuthed(): boolean;
    /**
     * Set Rich Preset
     * @param title Current Title
     * @param desc Current Description
     */
    public SetPreset(title: string, desc: string);
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
declare var sys: ElementarySystem;

declare class ElementaryUI 
{
    public log(x: string);
    public warn(x: string);
    public error(x: string);
}
declare var ui: ElementaryUI;

declare class ElementaryGame
{
    
    public get control(): control;
    public get animation(): ElementaryAnimationModule;
    public get info(): ElementaryInfoModule;
    public get TaskManager() : YieldWaiter;

    public MainCamera(): UCamera;
    public get discord(): Discord;
    public get dpi(): float;
    public get isEditor(): boolean;
    public get isEditor(): NetworkReachability;
    public setResolution(x: int, y: int, z: FullScreenMode);
    public setTargetFrameRate(fps: int);
    public openURL(url: string);
    public on(event: "lowMemory" | "focusChanged", callback: Function);
}


