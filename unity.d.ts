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
    public GetComponent(type: string) : UComponent
    /**
     * Calls the method named methodName on every MonoBehaviour in this game object
     * @param name Name of the method to call.
     * @param obj Optional parameter for the method.
     */
    public SendMessage(name: string, obj?: object, opt?: SendMessageOptions);
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
    public AddListener(x: Function);
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