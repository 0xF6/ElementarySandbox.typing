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

declare class ElementaryBehaviour extends MonoBehaviour
{
    public get PathToModule(): string;
    /**
     * Short side GUID
     */
    public get ShortID(): string;

    public get GUID(): Guid;

    public onAwake();
    public onStart();
    public onLate();
    public onQuit();
    public onDestroy();
    public onUpdate();
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
    public login(): string;
}
declare class app
{
    public quit();
    public engineVersion(): string;
    public version(): string;
    public targetFPS(): int;
}

declare class ElementaryAnimationModule
{
    public SmoothChange(from: float, to: float, time: float, callback: (value: float) => void);
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