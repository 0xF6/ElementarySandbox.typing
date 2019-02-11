///<reference path="unity.d.ts"/>
declare type FullScreenMode = "ExclusiveFullScreen" | "FullScreenWindow" | "MaximizedWindow" | "windowed";
declare type NetworkReachability = "NotReachable" | "ReachableViaCarrierDataNetwork" | "ReachableViaLocalAreaNetwork";
declare type LoadSceneMode = "Single" | "Additive";
declare type uiEvent = "PointEnter" | "PointerExit" | "PointerDown" | "PointerUp" | "PointerClick";
declare type ParticleType = 
            "Electron" | 
            "Positron" | 
            "Neutron" | 
            "Proton" | 
            "Graviton" | 
            "Photon" | 
            "Myaon" | 
            "Pion" | 
            "Kaon" | 
            "XIHyperion" | 
            "PIMezon" | "Omega";

declare class RaycastResult
{
    public distance: float;
    /**
     * Hit index.
     */
    public index: float;
    /**
     * The relative depth of the element.
     */
    public depth: int;
    /**
     * The SortingLayer of the hit object.
     */
    public sortingLayer: int;
    /**
     * The SortingOrder for the hit object.
     */
    public sortingOrder: int;
    /**
     * The world position of the where the raycast has hit.
     */
    public worldPosition: UVector3D;
    /**
     * The normal at the hit location of the raycast.
     */
    public worldNormal: UVector3D;
    /**
     * The screen position from which the raycast was generated.
     */
    public screenPosition: UVector2D;
    /**
     * The GameObject that was hit by the raycast.
     */
    public gameObject: UGameObject;
    /**
     * Is there an associated module and a hit GameObject.
     */
    public isValid: boolean;
}
declare class UInput
{
    public  simulateMouseWithTouches: boolean;
    public  anyKey: boolean;
    public  anyKeyDown: boolean;
    public  inputString: string;
    public  mousePosition: UVector3D;
    public  mouseScrollDelta: UVector2D;
    public  imeCompositionMode: IMECompositionMode;
    public  compositionString: string;
    public  imeIsSelected: boolean;
    public  compositionCursorPos: UVector2D;
    public  eatKeyPressOnTextFieldFocus: boolean;
    public  mousePresent: boolean;
    public  touchCount: int;
    public  touchPressureSupported: boolean;
    public  stylusTouchSupported: boolean;
    public  touchSupported: boolean;
    public  multiTouchEnabled: boolean;
    public  isGyroAvailable: boolean;
    public  deviceOrientation: DeviceOrientation;
    public  acceleration: UVector3D;
    public  compensateSensors: boolean;
    public  accelerationEventCount: int;
    public  backButtonLeavesApp: boolean;
    public  location: LocationService;
    public  compass: Compass;
    public  gyro: Gyroscope;
    public  touches: Touch[];
    public  accelerationEvents: AccelerationEvent[];
    public  GetAxis(axisName: string): float;
    public  GetAxisRaw(axisName: string): float;
    public  GetButton(buttonName: string): boolean;
    public  GetButtonDown(buttonName: string): boolean;
    public  GetButtonUp(buttonName: string): boolean;
    public  GetMouseButton(button: int): boolean;
    public  GetMouseButtonDown(button: int): boolean;
    public  GetMouseButtonUp(button: int): boolean;
    public  ResetInputAxes(): void;
    public  IsJoystickPreconfigured(joystickName: string): boolean;
    public  GetJoystickNames(): string[];
    public  GetTouch(index: int): Touch;
    public  GetAccelerationEvent(index: int): AccelerationEvent;
    public  GetKey(name: string): boolean;
    public  GetKeyUp(name: string): boolean;
    public  GetKeyDown(name: string): boolean;
}
declare type PressedButton = "Left" | "Right" | "Middle";
declare class PointerEventData
{
    public get pointerEnter(): UGameObject;
    public get lastPress(): UGameObject;
    public get rawPointerPress(): UGameObject;
    public get pointerDrag(): UGameObject;
    public get pointerCurrentRaycast(): RaycastResult;
    public get pointerPressRaycast(): RaycastResult;

    public pointerId: int;
    public position: UVector2D;
    public delta: UVector2D;
    public pressPosition: UVector2D;
    public scrollDelta: UVector2D;
    public useDragThreshold: boolean;
    public dragging: boolean;

    public clickTime: float;
    public clickCount: float;

    public button: PressedButton;

    public IsPointerMoving(): boolean;
    public IsScrolling(): boolean;

    public enterEventCamera: Camera;
    public pressEventCamera: Camera;

    public pointerPress: UGameObject;
}



declare class UIScriptableComponent extends ElementaryBehaviour
{
    public get Canvas(): Canvas;
    public get Render(): CanvasRender;
    public get Raycaster(): GraphicRaycaster;
    public get Scaler(): CanvasScaler;

    public on(event: uiEvent, f: (x: PointerEventData) => {});
}

declare class TouchComponent extends MonoBehaviour
{
    public on(event: uiEvent, f: (x: PointerEventData) => {});
}
declare class UTime
{
    public  timeSinceLevelLoad: float;
    public  deltaTime: float;
    public  fixedTime: float;
    public  unscaledTime: float;
    public  fixedUnscaledTime: float;
    public  unscaledDeltaTime: float;
    public  fixedUnscaledDeltaTime: float;
    public  fixedDeltaTime: float;
    public  maximumDeltaTime: float;
    public  smoothDeltaTime: float;
    public  maximumParticleDeltaTime: float;
    public  timeScale: float;
    public  frameCount: int;
    public  renderedFrameCount: int;
    public  realtimeSinceStartup: float;
    public  captureFramerate: int;
    public  inFixedTimeStep: boolean;
}
declare class ElementaryBehaviour extends MonoBehaviour
{
    public get PathToModule(): string;
    /**
     * Short side GUID
     */
    public get ShortID(): string;

    public get GUID(): Guid;

    /**
     * @implements Need Override in script component, optional
     */
    @NeedOverride
    public onAwake();
    /**
     * @implements Need Override in script component, optional
     */
    @NeedOverride
    public onStart();
    /**
     * @implements Need Override in script component, optional
     */
    @NeedOverride
    public onLate();
    /**
     * @implements Need Override in script component, optional
     */
    @NeedOverride
    public onQuit();
    /**
     * @implements Need Override in script component, optional
     */
    @NeedOverride
    public onDestroy();
    /**
     * @implements Need Override in script component, optional
     */
    @NeedOverride
    public onUpdate();
    /**
     * Init PhysicsComponent for use event colliders\triggers
     */
    public EnablePhysicsContact(): PhysicsComponent;
    /**
     * Init TouchComponent for use Pointer events
     */
    public EnableTouchContact(): TouchComponent;
}

declare class control
{
    public find(name: string): UGameObject;
    public findByTag(tag: string): UGameObject;
    public loadLevel(level: int);
    public loadLevelM(levelName: string, mode: LoadSceneMode);
    public DontDestroy(go: UGameObject);
}
declare class Discord
{
    /**
     * Current Login
     */
    public login: string;
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
declare class app
{
    public quit();
    public engineVersion(): string;
    public version(): string;
    public targetFPS(): int;
}

declare class YieldWaiter extends MonoBehaviour
{
    AddTask(time: float, action: () => void): void;
}

declare class ElementaryAnimationModule
{
    public SmoothChange(from: float, to: float, time: float, callback: (value: float) => void): void;
    public SmoothAlpha(go: UGameObject, to: float, time: float): void;
    public SmoothMove(go: RectTransform, to: UVector3D, time: float): void;
}

declare enum GraphicsDeviceType
{
    // NONE
    Null = 4,
    // Linux
    OpenGL2 = 0,
    OpenGLES2 = 8,
    OpenGLES3 = 11,
    OpenGLCore = 17,
    // MultiOS
    Vulkan = 21,
    // Windows
    Direct3D9 = 1,
    Direct3D11 = 2,
    Direct3D12 = 18,
    // Playstation
    PlayStationVita = 12,
    PlayStation4 = 13,
    PlayStation3 = 3,
    // Nintendo
    N3DS = 19,
    Switch = 22,
    // XBox and Windows Store
    Xbox360 = 6,
    XboxOne = 14,
    XboxOneD3D12 = 23,
    // MacOS
    Metal = 16,
}

declare class CPU
{
    public readonly Count: int;
    public readonly Frequency: int;
    public readonly Type: string;
}
declare class GPU
{
    public readonly ShaderLevel: int;
    public readonly MultiThreaded: boolean;
    public readonly DeviceName: string;
    public readonly DeviceType: GraphicsDeviceType;
    public readonly MemorySize: int;
}
declare class ElementaryInfoModule
{
    GPU: GPU;
    CPU: CPU;

    public operatingSystem: string;
    public operatingSystemFamily: string;
}

declare class ElectroMagnetic extends MonoBehaviour
{
    public readonly IsAffectMagnetic;

    public SetStableParticle(isStable: boolean): void;
    public IsOwnerPole(gen: GeneratorMagneticImpulse): boolean;
    public IsFreeOwner(): boolean;
    public TriggerMagneticPole(generator: GeneratorMagneticImpulse): void;
    public TriggerLostMagneticPole(): void;
    public getPositionGenerator(): UVector3D;
    public GetRandomTransformVector3(): UVector3D;
}
declare class GeneratorMagneticImpulse extends MonoBehaviour
{
    public LayersToPull: LayerMask;
    public RadiusPull: float;
}

declare class QuarkComponent extends MonoBehaviour
{
    public quarkList: Quark[];
    public quarkListInternal: string[];
    public ParticleBase: ElementaryParticle;
    public TriggerAvailableQuark(q: Quark[]): void;
    public IsAvailable(): boolean;
    public Apply(cmp: QuarkComponent, defined: Quark[], generatedEnergy: Energy): void;
    public Extract(): Quark[];
    public getNuclonCount(): int;
    public getNuclon(): Quark[];
    public Collapse(quark: Quark[]): void;
    public IsAvailable(type: QuarkType): boolean;
}
declare class Quark
{
    public Name: string;
    public Symbol: string;
    public Type: QuarkType;
    public EChange: ElectricChange;
    public Mass: Energy;
    public IsAnti(): boolean;
    public ToString(): string;
}
declare class ElectricChange
{
    public Unit: string;
    public IsPositive: boolean;
    public Value: string;
}
declare class SpriteGlowEffect extends MonoBehaviour
{
    public Renderer: SpriteRenderer;
    public GlowColor: Color;
    public GlowBrightness: float;
    public OutlineWidth: int;
    public AlphaThreshold: float;
    public DrawOutside: boolean;
    public EnableInstancing: boolean;
}


//===--------------- Decorators

declare function NeedOverride(constructor: Function){}