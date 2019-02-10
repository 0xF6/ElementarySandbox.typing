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
    public GetComponent(type: string) : UComponent

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