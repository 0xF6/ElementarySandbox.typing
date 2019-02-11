/// <reference path="./../quark/index.d.ts" />
/// <reference path="./../system/index.d.ts" />
/// <reference path="./../CoreModule/index.d.ts" />
/// <reference path="./../Physics2DModule/index.d.ts" />
/// <reference path="./../UI/index.d.ts" />
declare global 
{

    type uiEvent = "PointEnter" | "PointerExit" | "PointerDown" | "PointerUp" | "PointerClick";
    type ParticleType =
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

    interface QuarkComponent extends MonoBehaviour
    {
        quarkList: Quark[];
        quarkListInternal: string[];
        ParticleBase: ElementaryParticle;
        TriggerAvailableQuark(q: Quark[]): void;
        IsAvailable(): boolean;
        Apply(cmp: QuarkComponent, defined: Quark[], generatedEnergy: Energy): void;
        Extract(): Quark[];
        getNuclonCount(): int;
        getNuclon(): Quark[];
        Collapse(quark: Quark[]): void;
        IsAvailable(type: QuarkType): boolean;
    }
    interface ElementaryParticle extends ElementaryBehaviour {
        ParticleType: ParticleType;
        IsElectroMagnetic: boolean;
        FreezeRotation: boolean;
        particleColor: Color;
        Material2D: PhysicsMaterial2D;
        Sprite: Sprite;
        Symbol: string;
        Mass: float;

        SpriteRender: SpriteRenderer;
        glow: SpriteGlowEffect;
        Collider: Collider2D;
        ComplexBody: Rigidbody2D;
        MagneticPole: ElectroMagnetic;

        /**
         * @implements Need Override in script component
         */
        //@NeedOverride()
        getMass(): float;
        /**
         * @implements Need Override in script component
         */
        //@NeedOverride
        getLifeTime(): float;
        /**
         * @implements Need Override in script component
         */
        //@NeedOverride
        getQuantumNumber(qName: string): float;
        /**
         * @implements Need Override in script component
         */
        //@NeedOverride
        getQuarkGrid(): string;
    }
     
    interface PhysicsComponent extends MonoBehaviour {
        onTriggerEnter: UnityEventGeneric<UGameObject>;
        onTriggerExit: UnityEventGeneric<UGameObject>;
        onTriggerStay: UnityEventGeneric<UGameObject>;

        onColliderEnter: UnityEventGeneric<UGameObject>;
        onColliderExit: UnityEventGeneric<UGameObject>;
        onColliderStay: UnityEventGeneric<UGameObject>;

        IsTrigger(): boolean;
        EnableTrigger(): void;
        Collider: Collider2D;
    }


    interface ParticleItem {
        name: string;
        type: ParticleType;
        prefab: string;
        sprite: string;
    }
    interface ElementaryWindow extends UIScriptableComponent {
        AddItem(i: ParticleItem);
    }

    interface ElementaryPhysics2D {
        Simulate(step: float);
        getFPS(): int;

        autoSimulation: boolean;
    }

    interface ElementarySystem {
        app: app;
        delta(): float;
        fixedDelta(): float;
        playTime(): float;
    }


    interface ElementaryUI {
        log(x: string);
        warn(x: string);
        error(x: string);
    }

    interface ElementaryGame {
        control: control;
        animation: ElementaryAnimationModule;
        info: ElementaryInfoModule;
        audio: ElementaryAudio;
        setting: ElementarySettting;
        TaskManager(): YieldWaiter;


        MainCamera(): UCamera;
        /**
         * Getting Discord controller
         * @summary CALL ONLY IN onStart
         */
        discord(): Discord;
        dpi: float;
        isEditor: boolean;
        NetworkReachability: NetworkReachability;
        setResolution(x: int, y: int, z: FullScreenMode);
        setTargetFrameRate(fps: int);
        openURL(url: string);
        on(event: "lowMemory" | "focusChanged", callback: () => void);

        Resources<T>(path: string): T;

    }

    interface ElementaryAudio {
        PlayShot(target: UGameObject, clip: AudioClip): void;
        PlayDelay(target: UGameObject, clip: AudioClip, time: float): void;
        PlayScheduled(target: UGameObject, clip: AudioClip, time: float): void;
        IsAvailable(go: UGameObject): boolean;
        EnableSource(go: UGameObject): void;
    }

    interface ElementaryLight {
        GetGlobal(): Light;
        IsAvailable(): boolean;
    }


    interface ElementarySettting {
        setInt(key: string, value: int): void;
        getInt(key: string, defaultValue?: int): int;
        setFloat(key: string, value: float): void;
        getFloat(key: string, defaultValue?: float): float;
        setString(key: string, value: string): void;
        getString(key: string, defaultValue?: string): string;
        hasKey(key: string): boolean;
        deleteKey(key: string): void;
        deleteAll(): void;
        save(): void;
    }

    interface UIScriptableComponent extends ElementaryBehaviour {
        Canvas: Canvas;
        Raycaster: GraphicRaycaster;
        Scaler: CanvasScaler;

        on(event: uiEvent, f: (x: PointerEventData) => {});
    }

    interface TouchComponent extends MonoBehaviour {
        on(event: uiEvent, f: (x: PointerEventData) => {});
    }
    
    interface ElementaryBehaviour extends MonoBehaviour {
        PathToModule: string;
        /**
         * Short side GUID
         */
        ShortID: string;

        /**
         * @implements Need Override in script component, optional
         */
        //@NeedOverride
        onAwake();
        /**
         * @implements Need Override in script component, optional
         */
        // @NeedOverride
        onStart();
        /**
         * @implements Need Override in script component, optional
         */
        //@NeedOverride
        onLate();
        /**
         * @implements Need Override in script component, optional
         */
        //@NeedOverride
        onQuit();
        /**
         * @implements Need Override in script component, optional
         */
        // @NeedOverride
        onDestroy();
        /**
         * @implements Need Override in script component, optional
         */
        //@NeedOverride
        onUpdate();
        /**
         * Init PhysicsComponent for use event colliders\triggers
         */
        EnablePhysicsContact(): PhysicsComponent;
        /**
         * Init TouchComponent for use Pointer events
         */
        EnableTouchContact(): TouchComponent;
    }

    interface control {
        find(name: string): UGameObject;
        findByTag(tag: string): UGameObject;
        loadLevel(level: int);
        loadLevelM(levelName: string, mode: LoadSceneMode);
        DontDestroy(go: UGameObject);
    }
    interface Discord {
        /**
         * Current Login
         */
        login: string;
        /**
         * OnConnected Discord Event
         */
        onConnect: UnityEvent;
        /**
         * Is Authed in Discord API
         */
        IsAuthed(): boolean;
        /**
         * Set Rich Preset
         * @param title Current Title
         * @param desc Current Description
         */
        SetPreset(title: string, desc: string);
    }
    interface app {
        quit();
        engineVersion(): string;
        version(): string;
        targetFPS(): int;
    }

    interface YieldWaiter extends MonoBehaviour {
        AddTask(time: float, action: () => void): void;
    }

    interface ElementaryAnimationModule {
        SmoothChange(from: float, to: float, time: float, callback: (value: float) => void): void;
        SmoothAlpha(go: UGameObject, to: float, time: float): void;
        SmoothMove(go: RectTransform, to: UVector3D, time: float): void;
    }




    interface ElementaryInfoModule {
        GPU: GPU;
        CPU: CPU;

        operatingSystem: string;
        operatingSystemFamily: string;
    }

    interface ElectroMagnetic extends MonoBehaviour {
        readonly IsAffectMagnetic;

        SetStableParticle(isStable: boolean): void;
        IsOwnerPole(gen: GeneratorMagneticImpulse): boolean;
        IsFreeOwner(): boolean;
        TriggerMagneticPole(generator: GeneratorMagneticImpulse): void;
        TriggerLostMagneticPole(): void;
        getPositionGenerator(): UVector3D;
        GetRandomTransformVector3(): UVector3D;
    }
    interface GeneratorMagneticImpulse extends MonoBehaviour {
        LayersToPull: LayerMask;
        RadiusPull: float;
    }



    interface SpriteGlowEffect extends MonoBehaviour {
        Renderer: SpriteRenderer;
        GlowColor: Color;
        GlowBrightness: float;
        OutlineWidth: int;
        AlphaThreshold: float;
        DrawOutside: boolean;
        EnableInstancing: boolean;
    }
}
export {}