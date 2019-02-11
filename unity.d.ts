///<reference path="unity.core.d.ts"/>
declare type float = number;
declare type int = number;
declare type PrimitiveType = "Sphere" | "Capsule" | "Cylinder" | "Cube" | "Plane" | "Quad";
declare type SendMessageOptions = "RequireReceiver" | "DontRequireReceiver";
/**
 * Base class for all objects Unity can reference.
 */
declare class UObject
{
    /**
     * @returns Returns the instance id of the object.
     */
    public GetInstanceID(): number;
    /**
     * @returns The name of the object.
     */
    public get name(): string;

    /** 
     * Do not destroy the target Object when loading a new Scene.
     */
    public static DontDestroyOnLoad(obj: UObject)
    /**
     * Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
     * @param obj Object to be destroyed.
     */
    public static DestroyImmediate(obj: UObject);
    /**
     * Removes a gameobject, component or asset.
     * @param obj The object to destroy.
     */
    public static Destroy(obj: UObject);
    /**
     * Removes a gameobject, component or asset.
     * @param obj The object to destroy.
     * @param time The optional amount of time to delay before destroying the object.
     */
    public static Destroy(obj: UObject, time: float);
}
declare class UVector
{
    public kEpsilon: float = 1e-05;
    public kEpsilonNormalSqrt: float = 1e-15;
}
declare class UVector3D extends UVector
{
    public x: float;
    public y: float;
    public z: float;
}
declare class UVector2D extends UVector
{
    public x: float;
    public y: float;
}
declare class UQuaternion
{
    public x: float;
    public y: float;
    public z: float;
    public w: float;
}
declare class UTransform
{
    /**
     * The world space position of the Transform.
     */
    public position: UVector3D;
    /**
     * Position of the transform relative to the parent transform.
     */
    public localPosition: UVector3D;
    /**
     * The rotation as Euler angles in degrees.
     */
    public eulerAngles: UVector3D;
    /**
     * The rotation as Euler angles in degrees relative to the parent transform's rotation.
     */
    public localEulerAngles: UVector3D;
    /**
     * The red axis of the transform in world space.
     */
    public right: UVector3D;
    public up: UVector3D;
    public forward: UVector3D;

    public rotation: UQuaternion;
    public localRotation: UQuaternion;

    /**
     * The parent of the transform.
     */
    public parent: UTransform;
}


export enum DeviceOrientation
{
    Unknown = 0,
    Portrait = 1,
    PortraitUpsideDown = 2,
    LandscapeLeft = 3,
    LandscapeRight = 4,
    FaceUp = 5,
    FaceDown = 6,
}
export enum IMECompositionMode
{
    Auto = 0,
    On = 1,
    Off = 2,
}
declare class UComponent extends UObject
{
    /**
     * The tag of this game object.
     */
    public tag: string;
    /**
     * The Transform attached to this GameObject.
     */
    public get transform(): UTransform;
    /**
     * The game object this component is attached to. A component is always attached to a game object.
     */
    public get gameObject(): UGameObject;
    /**
     * Returns the component with name type if the game object has one attached, null if it doesn't.
     * @param type The type of Component to retrieve.
     */
    public GetComponent(type: string) : UComponent & PostProcessVolume & PhysicsComponent
    /**
     * Calls the method named methodName on every MonoBehaviour in this game object
     * @param name Name of the method to call.
     * @param obj Optional parameter for the method.
     */
    public SendMessage(name: string, obj?: object, opt?: SendMessageOptions);
}
declare class PhysicsComponent extends MonoBehaviour
{
    public onTriggerEnter: UnityEventGeneric<UGameObject>;
    public onTriggerExit: UnityEventGeneric<UGameObject>;
    public onTriggerStay: UnityEventGeneric<UGameObject>;

    public onColliderEnter: UnityEventGeneric<UGameObject>;
    public onColliderExit: UnityEventGeneric<UGameObject>;
    public onColliderStay: UnityEventGeneric<UGameObject>;

    public IsTrigger(): boolean;
    public EnableTrigger(): void;
    public Collider: Collider2D;
}
declare class PhysicsMaterial2D extends UObject
{
    public bounciness: float;
    public friction: float;
}

declare class Rigidbody2D extends UComponent
{
    public position: UVector2D;
    public rotation: float;
    public velocity: UVector2D;
    public angularVelocity: float;
    public useAutoMass: boolean;
    public mass: float;
    public sharedMaterial: PhysicsMaterial2D;
    public centerOfMass: UVector2D;
    public worldCenterOfMass: UVector2D;
    public inertia: float;
    public drag: float;
    public angularDrag: float;
    public gravityScale: float;
    public bodyType: RigidbodyType2D;
    public useFullKinematicContacts: boolean;
    public isKinematic: boolean;
    public fixedAngle: boolean;
    public freezeRotation: boolean;
    public constraints: RigidbodyConstraints2D;
    public simulated: boolean;
    public interpolation: RigidbodyInterpolation2D;
    public sleepMode: RigidbodySleepMode2D;
    public collisionDetectionMode: CollisionDetectionMode2D;
    public attachedColliderCount: int;
    public MovePosition(position: UVector2D): void;
    public MoveRotation(angle: float): void;
    public IsSleeping(): boolean;
    public IsAwake(): boolean;
    public Sleep(): void;
    public WakeUp(): void;
    public IsTouching(collider: Collider2D): boolean;
    public IsTouching(collider: Collider2D, contactFilter: ContactFilter2D): boolean;
    public IsTouching(contactFilter: ContactFilter2D): boolean;
    public IsTouchingLayers(): boolean;
    public IsTouchingLayers(layerMask: int): boolean;
    public OverlapPoint(point: UVector2D): boolean;
    public Distance(collider: Collider2D): ColliderDistance2D;
    public AddForce(force: UVector2D): void;
    public AddForce(force: UVector2D, mode: ForceMode2D): void;
    public AddRelativeForce(relativeForce: UVector2D): void;
    public AddRelativeForce(relativeForce: UVector2D, mode: ForceMode2D): void;
    public AddForceAtPosition(force: UVector2D, position: UVector2D): void;
    public AddForceAtPosition(force: UVector2D, position: UVector2D, mode: ForceMode2D): void;
    public AddTorque(torque: float): void;
    public AddTorque(torque: float, mode: ForceMode2D): void;
    public GetPoint(point: UVector2D): UVector2D;
    public GetRelativePoint(relativePoint: UVector2D): UVector2D;
    public GetVector(vector: UVector2D): UVector2D;
    public GetRelativeVector(relativeVector: UVector2D): UVector2D;
    public GetPointVelocity(point: UVector2D): UVector2D;
    public GetRelativePointVelocity(relativePoint: UVector2D): UVector2D;
    public OverlapCollider(contactFilter: ContactFilter2D, results: Collider2D[]): int;
    public GetContacts(contacts: ContactPoint2D[]): int;
    public GetContacts(contactFilter: ContactFilter2D, contacts: ContactPoint2D[]): int;
    public GetContacts(colliders: Collider2D[]): int;
    public GetContacts(contactFilter: ContactFilter2D, colliders: Collider2D[]): int;
    public GetAttachedColliders(results: Collider2D[]): int;
    public Cast(direction: UVector2D, results: RaycastHit2D[]): int;
    public Cast(direction: UVector2D, results: RaycastHit2D[], distance: float): int;
    public Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[]): int;
    public Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[], distance: float): int;
}
declare enum ForceMode2D
{
    Force = 0,
    Impulse = 1,
}
declare enum CollisionDetectionMode2D
{
    Discrete = 0,
    Discrete = 0,
    Continuous = 1,
}
declare enum RigidbodySleepMode2D
{
    NeverSleep = 0,
    StartAwake = 1,
    StartAsleep = 2,
}
declare enum RigidbodyInterpolation2D
{
    None = 0,
    Interpolate = 1,
    Extrapolate = 2,
}
declare enum RigidbodyConstraints2D
{
    None = 0,
    FreezePositionX = 1,
    FreezePositionY = 2,
    FreezePosition = 3,
    FreezeRotation = 4,
    FreezeAll = 7,
}
declare enum RigidbodyType2D
{
    Dynamic = 0,
    Kinematic = 1,
    Static = 2,
}

declare class SpriteRenderer extends Renderer
{
    public sprite: Sprite;
    public drawMode: SpriteDrawMode;
    public size: UVector2D;
    public adaptiveModeThreshold: float;
    public tileMode: SpriteTileMode;
    public color: Color;
    public maskInteraction: SpriteMaskInteraction;
    public flipX: boolean;
    public flipY: boolean;
    public spriteSortPoint: SpriteSortPoint;
}
declare enum SpriteSortPoint
{
    Center = 0,
    Pivot = 1,
}
declare enum SpriteMaskInteraction
{
    None = 0,
    VisibleInsideMask = 1,
    VisibleOutsideMask = 2,
}
declare enum SpriteTileMode
{
    Continuous = 0,
    Adaptive = 1,
}
declare enum SpriteDrawMode
{
    Simple = 0,
    Sliced = 1,
    Tiled = 2,
}


declare enum QuarkType
{
    Unk = 0,
    d = 1,
    u = 2,
    s = 3,
    c = 4,
    b = 5,
    t = 6,
}


declare class Renderer extends UComponent
{
    public lightmapTilingOffset: Vector4;
    public lightProbeAnchor: Transform;
    public castShadows: boolean;
    public motionVectors: boolean;
    public useLightProbes: boolean;
    public bounds: Bounds;
    public enabled: boolean;
    public isVisible: boolean;
    public shadowCastingMode: ShadowCastingMode;
    public receiveShadows: boolean;
    public motionVectorGenerationMode: MotionVectorGenerationMode;
    public lightProbeUsage: LightProbeUsage;
    public reflectionProbeUsage: ReflectionProbeUsage;
    public renderingLayerMask: int;
    public rendererPriority: int;
    public sortingLayerName: string;
    public sortingLayerID: int;
    public sortingOrder: int;
    public allowOcclusionWhenDynamic: boolean;
    public isPartOfStaticBatch: boolean;
    public worldToLocalMatrix: Matrix4x4;
    public localToWorldMatrix: Matrix4x4;
    public lightProbeProxyVolumeOverride: GameObject;
    public probeAnchor: Transform;
    public lightmapIndex: int;
    public realtimeLightmapIndex: int;
    public lightmapScaleOffset: Vector4;
    public realtimeLightmapScaleOffset: Vector4;
    public materials: Material[];
    public material: Material;
    public sharedMaterial: Material;
    public sharedMaterials: Material[];
    public HasPropertyBlock(): boolean;
    public SetPropertyBlock(properties: MaterialPropertyBlock): void;
    public SetPropertyBlock(properties: MaterialPropertyBlock, materialIndex: int): void;
    public GetPropertyBlock(properties: MaterialPropertyBlock): void;
    public GetPropertyBlock(properties: MaterialPropertyBlock, materialIndex: int): void;
    public GetMaterials(m: List<Material>): void;
    public GetSharedMaterials(m: List<Material>): void;
    public GetClosestReflectionProbes(result: List<ReflectionProbeBlendInfo>): void;
}
declare enum MotionVectorGenerationMode
{
    Camera = 0,
    Object = 1,
    ForceNoMotion = 2,
}
declare enum ReflectionProbeUsage
{
    Off = 0,
    BlendProbes = 1,
    BlendProbesAndSkybox = 2,
    Simple = 3,
}
declare enum LightProbeUsage
{
    Off = 0,
    BlendProbes = 1,
    UseProxyVolume = 2,
    CustomProvided = 4,
}
declare enum ShadowCastingMode
{
    Off = 0,
    On = 1,
    TwoSided = 2,
    ShadowsOnly = 3,
}

declare class Collider2D extends UBehaviour
{
    public density: float;
    public isTrigger: boolean;
    public usedByEffector: boolean;
    public usedByComposite: boolean;
    public composite: CompositeCollider2D;
    public offset: UVector2D;
    public attachedRigidbody: Rigidbody2D;
    public shapeCount: int;
    public bounds: Bounds;
    public sharedMaterial: PhysicsMaterial2D;
    public friction: float;
    public bounciness: float;
    public IsTouching(collider: Collider2D): boolean;
    public IsTouching(collider: Collider2D, contactFilter: ContactFilter2D): boolean;
    public IsTouching(contactFilter: ContactFilter2D): boolean;
    public IsTouchingLayers(): boolean;
    public IsTouchingLayers(layerMask: int): boolean;
    public OverlapPoint(point: UVector2D): boolean;
    public Distance(collider: Collider2D): ColliderDistance2D;
    public OverlapCollider(contactFilter: ContactFilter2D, results: Collider2D[]): int;
    public GetContacts(contacts: ContactPoint2D[]): int;
    public GetContacts(contactFilter: ContactFilter2D, contacts: ContactPoint2D[]): int;
    public GetContacts(colliders: Collider2D[]): int;
    public GetContacts(contactFilter: ContactFilter2D, colliders: Collider2D[]): int;
    public Cast(direction: UVector2D, results: RaycastHit2D[]): int;
    public Cast(direction: UVector2D, results: RaycastHit2D[], distance: float): int;
    public Cast(direction: UVector2D, results: RaycastHit2D[], distance: float, ignoreSiblingColliders: boolean): int;
    public Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[]): int;
    public Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[], distance: float): int;
    public Cast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[], distance: float, ignoreSiblingColliders: boolean): int;
    public Raycast(direction: UVector2D, results: RaycastHit2D[]): int;
    public Raycast(direction: UVector2D, results: RaycastHit2D[], distance: float): int;
    public Raycast(direction: UVector2D, results: RaycastHit2D[], distance: float, layerMask: int): int;
    public Raycast(direction: UVector2D, results: RaycastHit2D[], distance: float, layerMask: int, minDepth: float): int;
    public Raycast(direction: UVector2D, results: RaycastHit2D[], distance: float, layerMask: int, minDepth: float, maxDepth: float): int;
    public Raycast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[]): int;
    public Raycast(direction: UVector2D, contactFilter: ContactFilter2D, results: RaycastHit2D[], distance: float): int;
}
declare class Bounds
{
    public center: UVector3D;
    public size: UVector3D;
    public extents: UVector3D;
    public min: UVector3D;
    public max: UVector3D;
    public GetHashCode(): int;
    public Equals(other: any): boolean;
    public Equals(other: Bounds): boolean;
    public static op_Equality(lhs: Bounds, rhs: Bounds): boolean;
    public static op_Inequality(lhs: Bounds, rhs: Bounds): boolean;
    public SetMinMax(min: UVector3D, max: UVector3D): void;
    public Encapsulate(point: UVector3D): void;
    public Encapsulate(bounds: Bounds): void;
    public Expand(amount: float): void;
    public Expand(amount: UVector3D): void;
    public Intersects(bounds: Bounds): boolean;
    public IntersectRay(ray: Ray): boolean;
    public IntersectRay(ray: Ray, distance: float): boolean;
    public ToString(): string;
    public ToString(format: string): string;
    public Contains(point: UVector3D): boolean;
    public SqrDistance(point: UVector3D): float;
    public ClosestPoint(point: UVector3D): UVector3D;
}

declare class ContactPoint2D
{
    public point: UVector2D;
    public normal: UVector2D;
    public separation: float;
    public normalImpulse: float;
    public tangentImpulse: float;
    public relativeVelocity: UVector2D;
    public collider: Collider2D;
    public otherCollider: Collider2D;
    public rigidbody: Rigidbody2D;
    public otherRigidbody: Rigidbody2D;
    public enabled: boolean;
}
declare class RaycastHit2D
{
    public centroid: UVector2D;
    public point: UVector2D;
    public normal: UVector2D;
    public distance: float;
    public fraction: float;
    public collider: Collider2D;
    public rigidbody: Rigidbody2D;
    public transform: Transform;
    public CompareTo(other: RaycastHit2D): int;
}

declare class ContactFilter2D
{
    public useTriggers: boolean;
    public useLayerMask: boolean;
    public useDepth: boolean;
    public useOutsideDepth: boolean;
    public useNormalAngle: boolean;
    public useOutsideNormalAngle: boolean;
    public layerMask: LayerMask;
    public minDepth: float;
    public maxDepth: float;
    public minNormalAngle: float;
    public maxNormalAngle: float;
    public static NormalAngleUpperLimit: float;
    public isFiltering: boolean;
    public NoFilter(): ContactFilter2D;
    public ClearLayerMask(): void;
    public SetLayerMask(layerMask: LayerMask): void;
    public ClearDepth(): void;
    public SetDepth(minDepth: float, maxDepth: float): void;
    public ClearNormalAngle(): void;
    public SetNormalAngle(minNormalAngle: float, maxNormalAngle: float): void;
    public IsFilteringTrigger(collider: Collider2D): boolean;
    public IsFilteringLayerMask(obj: GameObject): boolean;
    public IsFilteringDepth(obj: GameObject): boolean;
    public IsFilteringNormalAngle(normal: UVector2D): boolean;
    public IsFilteringNormalAngle(angle: float): boolean;
}

declare class LayerMask
{
    public value: int;
    public static LayerToName(layer: int): string;
    public static NameToLayer(layerName: string): int;
    public static GetMask(layerNames: string[]): int;
}





declare enum AudioClipLoadType
{
    /**
     * The audio data is decompressed when the audio clip is loaded.
     */
    DecompressOnLoad,
    /**
     * The audio data of the clip will be kept in memory in compressed form.
     */
    CompressedInMemory,
    /**
     * Streams audio data from disk.
     */
    Streaming
}

declare enum AudioDataLoadState
{
    /**
     * Value returned by AudioClip.loadState for an AudioClip 
     * that has no audio data loaded and where loading has not been initiated yet.
     */
    Unloaded,
    /**
     * Value returned by AudioClip.loadState for an AudioClip that is currently loading audio data.
     */
    Loading,
    /**
     * Value returned by AudioClip.loadState for an AudioClip that has succeeded loading its audio data.
     */
    Loaded,
    /**
     * Value returned by AudioClip.loadState for an AudioClip that has failed loading its audio data.
     */
    Failed
}
declare class AudioClip extends UObject
{
    /**
     * The length of the audio clip in seconds. (Read Only)
     */
    public readonly length: float;

    /**
     * The length of the audio clip in samples. (Read Only)
     */
    public readonly samples: int;
    /**
     * The number of channels in the audio clip. (Read Only)
     */
    public readonly channels: int;
    /**
     * The sample frequency of the clip in Hertz. (Read Only)
     */
    public readonly frequency: int;
    /**
     * Returns true if this audio clip is ambisonic (read-only).
     */
    public readonly ambisonic: boolean;
    /**
     * Corresponding to the "Load In Background" flag in the inspector, 
     * when this flag is set, the loading will happen delayed without blocking the main thread.
     */
    public loadInBackground: boolean;
    /**
     * The load type of the clip (read-only).
     */
    public readonly loadType: AudioClipLoadType;
    /**
     * Loads the audio data of a clip. 
     * Clips that have "Preload Audio Data" set will load the audio data automatically.
     */
    public LoadAudioData(): boolean;
    /**
     * Unloads the audio data associated with the clip. 
     * This works only for AudioClips that are based on actual sound file assets.
     */
    public UnloadAudioData(): boolean;
    /**
     * Returns the current load state of the audio data associated with an AudioClip.
     */
    public loadState: AudioDataLoadState;
}

/**
 * Base class for all entities in Unity Scenes.
 */
declare class UGameObject extends UObject
{
    /**
     * The tag of this game object.
     */
    public tag: string;
     /**
     * The Transform attached to this GameObject.
     */
    public get transform(): UTransform;
    /**
     * The layer the game object is in.
     */
    public get layer(): int;
    /**
     * Creates a new game object, named name.
     * @param name The name that the GameObject is created with. (optional)
     */
    constructor(name?: string)
    {}
    public CreatePrimitive(type: PrimitiveType);
    /**
     * Returns the component with name type if the game object has one attached, null if it doesn't.
     * @param type The type of Component to retrieve.
     */
    public GetComponent(type: string) : UComponent & PostProcessVolume & PhysicsComponent

    /**
     * Returns one active GameObject tagged tag. Returns undefined if no GameObject was found.
     * @param tag The tag to search for.
     */
    public FindWithTag(tag: string): UGameObject;
    /**
     * Calls the method named methodName on every MonoBehaviour in this game object
     * @param name Name of the method to call.
     * @param obj Optional parameter for the method.
     */
    public SendMessage(name: string, obj?: object, opt?: SendMessageOptions);
    /**
     * Activates/Deactivates the GameObject.
     */
    public SetActive(b: boolean);
    /**
     * Add component to object
     * @param t Type of object
     */
    public AddComponent(t: Type): UComponent;
}
/**
 * System Type
 */
declare class Type {}

declare class UBehaviour extends UComponent
{
    /**
     * Enabled Behaviours are Updated, disabled Behaviours are not.
     */
    public enabled: boolean;
    /**
     * Has the Behaviour had active and enabled called?
     */
    public isActiveAndEnabled: boolean;
}
declare class YieldInstruction {}
declare class Coroutine extends YieldInstruction {}

declare class MonoBehaviour extends UBehaviour
{
    /**
     * Is any invoke pending on this MonoBehaviour?
     */
    public IsInvoking(): boolean;
    /**
     * Invokes the method methodName in time seconds.
     */
    public Invoke(name: string, t: float);
    /**
     * Starts a coroutine named methodName.
     */
    public StartCoroutine(name: string) : Coroutine;
    public StopCoroutine(name: string | Coroutine) : Coroutine;
    public StopAllCoroutines();
}
declare class JSON
{
    public static stringify(o: object): string;
}
declare class Color
{
    public r: float;
    public b: float;
    public g: float;
    public a: float;
}
declare class UnityEvent
{
    public AddListener(x: () => void);
}
declare class UnityEventGeneric<T>
{
    public AddListener(x: (x: T) => void);
}



declare class Selectable
{
    public interactable: boolean;
}

declare class UButton extends Selectable
{
    public onClick: UnityEvent;
}
declare class UText
{
    public get font(): Font;
    public text: string;
}


/**
 * Rendering path of a Camera.
 */
declare enum RenderingPath
{
    /**
     * Use Player Settings.
     */
    UsePlayerSettings = -1,
    /**
     * Vertex Lit.
     */
    VertexLit = 0,
    /**
     * Forward Rendering.
     */
    Forward = 1,
    /**
     * Deferred Lighting (Legacy).
     */
    DeferredLighting = 2,
    /**
     * Deferred Shading.
     */
    DeferredShading = 3,
}
/**
 * Opaque object sorting mode of a Camera.
 */
declare enum OpaqueSortMode
{
    /**
     * Default opaque sorting mode.
     */
    Default,
    /**
     * Do rough front-to-back sorting of opaque objects.
     */
    FrontToBack,
    /**
     * Do not sort opaque objects by distance.
     */
    NoDistanceSort,
}
/**
 * Transparent object sorting mode of a Camera.
 */
declare enum TransparencySortMode
{
    /**
     * Default transparency sorting mode.
     */
    Default,
    /**
     * Perspective transparency sorting mode.
     */
    Perspective,
    /**
     * Orthographic transparency sorting mode.
     */
    Orthographic,
    /**
     * Sort objects based on distance along a custom axis.
     */
    CustomAxis,
}

declare enum CameraType
{
    /**
     * Used to indicate a regular in-game camera.
     */
    Game = 1,
    /**
     * Used to indicate that a camera is used for rendering the Scene View in the Editor.
     */
    SceneView = 2,
    /**
     * Used to indicate a camera that is used for rendering previews in the Editor.
     */
    Preview = 4,
    /**
     * Used to indicate that a camera is used for rendering VR (in edit mode) in the Editor.
     */
    VR = 8,
    /**
     * Used to indicate a camera that is used for rendering reflection probes.
     */
    Reflection = 16
}

declare enum CameraClearFlags
{
    /**
     * Clear with the skybox.
     */
    Skybox = 1,
    /**
     * Clear with the color.
     */
    Color = 2,
    /**
     * Clear with a background color.
     */
    SolidColor = 2,
    /**
     * Clear only the depth buffer.
     */
    Depth = 3,
    /**
     * Don't clear anything.
     */
    Nothing = 4,
}

declare class UCamera extends UBehaviour
{
    /**
     * The near clipping plane distance.
     */
    public nearClipPlane: float;
    /**
     * The far clipping plane distance.
     */
    public farClipPlane: float;
    /**
     * The field of view of the camera in degrees.
     */
    public fieldOfView: float;
    /**
     * The rendering path that should be used, if possible.
     */
    public renderingPath: RenderingPath;
    /**
     * The rendering path that is currently being used (Read Only).
     */
    public readonly actualRenderingPath: RenderingPath;


    /**
     * Revert all camera parameters to default.
     */
    public Reset(): void;

    /**
     * High dynamic range rendering.
     */
    public allowHDR: boolean;
    /**
     * MSAA rendering.
     */
    public allowMSAA: boolean;
    /**
     * Dynamic Resolution Scaling.
     */
    public allowDynamicResolution: boolean;
    /**
     * Should camera rendering be forced into a RenderTexture.
     */
    public forceIntoRenderTexture: boolean;
    /**
     * Camera's half-size when in orthographic mode.
     */
    public orthographicSize: float;
    /**
     * Is the camera orthographic (true) or perspective (false)?
     */
    public orthographic: boolean;
    /**
     * Opaque object sorting mode.
     */
    public opaqueSortMode: OpaqueSortMode;
    /**
     * Transparent object sorting mode.
     */
    public transparencySortMode: TransparencySortMode;
    /**
     * Resets this Camera's transparency sort settings to the default. 
     * Default transparency settings are taken from GraphicsSettings instead of directly from this Camera.
     */
    public ResetTransparencySortSettings(): void;
    /**
     * An axis that describes the direction along which the distances of 
     * objects are measured for the purpose of sorting.
     */
    public transparencySortAxis: UVector3D;
    /**
     * Camera's depth in the camera rendering order.
     */
    public depth: float;
    /**
     * The aspect ratio (width divided by height).
     */
    public aspect: float;
    /**
     * Revert the aspect ratio to the screen's aspect ratio.
     */
    public ResetAspect(): void;
    /**
     * This is used to render parts of the Scene selectively.
     */
    public cullingMask: int;
    /**
     * Mask to select which layers can trigger events on the camera.
     */
    public eventMask: int;
    /**
     * How to perform per-layer culling for a Camera.
     */
    public layerCullSpherical: boolean;
    /**
     * Identifies what kind of camera this is.
     */
    public cameraType: CameraType;
    /**
     * Per-layer culling distances.
     */
    public layerCullDistances: float[];
    /**
     * Whether or not the Camera will use occlusion culling during rendering.
     */
    public useOcclusionCulling: boolean;
    /**
     * The color with which the screen will be cleared.
     */
    public backgroundColor: Color;
    /**
     * How the camera clears the background.
     */
    public clearFlags: CameraClearFlags;
}
/**
 * A class you can derive from if you want to create objects that don't need to be attached to game objects.
 */
declare class ScriptableObject extends UObject
{
    /**
     * Creates an instance of a scriptable object.
     * @param className The type of the ScriptableObject to create, as the name of the type.
     */
    public static CreateInstance(className: string): ScriptableObject;
}


// TODO
declare class Light extends UBehaviour
{
    /**
     * The Intensity of a light is multiplied with the Light color.
     */
    public intensity: float;
}



//==----------------------------------






declare class DepthOfField extends PostProcessEffectSettings
{
    /**
     * The distance to the point of focus.
     */
    public focusDistance: FloatParameter;
    /**
     * The ratio of the aperture (known as f-stop or f-number). The smaller the value is, the
     * shallower the depth of field is.
     */
    public aperture: FloatParameter;
    /**
     * The distance between the lens and the film. The larger the value is, the shallower the
     * depth of field is.
     */
    public focalLength: FloatParameter;
}














//==----------------------------------- 

declare class PostProcessVolume extends MonoBehaviour
{
    public sharedProfile: PostProcessProfile;
    public profile: PostProcessProfile;
    /**
     * Should this volume be applied to the whole scene?
     */
    public isGlobal: boolean;
    /**
     * The outer distance to start blending from. A value of 0 means no blending and the volume
     * overrides will be applied immediatly upon entry.
     */
    public blendDistance: float;
    /**
     * The total weight of this volume in the scene. 0 means it won't do anything, 1 means full
     * effect.
     */
    public weight: float;
    /**
     * The volume priority in the stack. Higher number means higher priority. Negative values
     * are supported.
     */
    public priority: float;
}


declare abstract class UParameterOverride
{
    /**
     * The override state of this parameter.
     */
    public overrideState: boolean;
}


declare class ParameterOverride<T> extends UParameterOverride
{
    /**
     * The value stored in this parameter.
     */
    public value: T;
    /**
     * Interpolates between two values given an interpolation factor
     * @param from The value to interpolate from
     * @param to The value to interpolate to
     * @param t An interpolation factor (generally in range <c>[0,1]</c>)
     */
    public Interp(from: T, to: T, t: float): void;
}


declare class BoolParameter extends ParameterOverride<boolean> {}
declare class FloatParameter extends ParameterOverride<float> {
    public SetValue(value: float): void; // TODO: Need fix JS Marshaling double to float
}
declare class IntParameter extends ParameterOverride<int> {}
declare class StringParameter extends ParameterOverride<string> {}
declare class ColorParameter extends ParameterOverride<Color> {}
declare class Vector2Parameter extends ParameterOverride<UVector2D> {}
declare class Vector3Parameter extends ParameterOverride<UVector3D> {}



declare class PostProcessEffectSettings extends ScriptableObject
{
    /**
     * The active state of the set of parameter defined in this class.
     */
    public active: boolean = true;
    /**
     * The true state of the effect override in the stack. Setting this to <c>false</c> will
     * disable rendering for this effect assuming a volume with a higher priority doesn't
     * override it to <c>true</c>.
     */
    public enabled: BoolParameter;
    /**
     * Returns <c>true</c> if the effect is currently enabled and supported.
     * @param ctx The current post-processing render context
     */
    public IsEnabledAndSupported(ctx: PostProcessRenderContext): boolean;
}

declare class PostProcessProfile extends ScriptableObject
{
    /**
     * A list of all settings stored in this profile.
     */
    public settings: PostProcessEffectSettings[];
    /**
     * Adds settings for an effect to the profile.
     * @param type A type of PostProcessEffectSettings
     */
    public AddSettings(type: Type | PostProcessEffectSettings): PostProcessEffectSettings;
    /**
     * Removes settings for an effect from the profile.
     * @param type The type to look for and remove from the profile
     */
    public RemoveSettings(type: Type): void;
    /**
     * Checks if an effect has been added to the profile.
     * @param type The type to look for
     */
    public HasSettings(type: Type): boolean;
    /**
     * Returns settings for a given effect type name.
     */
    public GetSetting(name: string): PostProcessEffectSettings & DepthOfField;
}

declare class URandom
{
    public seed: int;
    public Range(min: number, max: number): number;
}
